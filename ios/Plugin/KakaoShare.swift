import Foundation
import SafariServices
import KakaoSDKCommon
import KakaoSDKShare
import KakaoSDKTemplate

@objc public class KakaoShare: NSObject {
    //in ViewController
    var safariViewController : SFSafariViewController? // to keep instance
    //...

    @objc public func initSDK(_ appKey: String) {
        KakaoSDK.initSDK(appKey: appKey)
    }

    @objc public func shareDefault(_ templateJsonStringData: Data, viewController: UIViewController) {

        guard let templatable = try? SdkJSONDecoder.custom.decode(FeedTemplate.self, from: templateJsonStringData) else {
            return
        }

        // 카카오톡 설치여부 확인
        if ShareApi.isKakaoTalkSharingAvailable() {
            // 카카오톡으로 카카오톡 공유 가능
            // templatable은 메시지 만들기 항목 참고
            ShareApi.shared.shareDefault(templatable: templatable) {(sharingResult, error) in
                if let error = error {
                    print(error)
                }
                else {
                    print("shareDefault() success.")
                    
                    if let sharingResult = sharingResult {
                        UIApplication.shared.open(sharingResult.url,
                                                  options: [:], completionHandler: nil)
                    }
                }
            }
        }
        else {
            // 카카오톡 미설치: 웹 공유 사용 권장
            // Custom WebView 또는 디폴트 브라우져 사용 가능
            // 웹 공유 예시 코드
            if let url = ShareApi.shared.makeDefaultUrl(templatable: templatable) {
                self.safariViewController = SFSafariViewController(url: url)
                self.safariViewController?.modalTransitionStyle = .crossDissolve
                self.safariViewController?.modalPresentationStyle = .overCurrentContext
                
                DispatchQueue.main.async {
                    viewController.present(self.safariViewController!, animated: true) {
                        print("웹 present success")
                    }
                }
            }
        }
    }
}
