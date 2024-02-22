package com.lifree1.kakao_share

import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.kakao.sdk.template.model.Button
import com.kakao.sdk.template.model.Content
import com.kakao.sdk.template.model.FeedTemplate
import com.kakao.sdk.template.model.Link

@CapacitorPlugin(name = "KakaoShare")
class KakaoSharePlugin : Plugin() {
    private val implementation = KakaoShare()

    @PluginMethod
    fun initSDK(call: PluginCall) {
        val appKey = call.getString("appKey")
        implementation.initSDK(this.activity, appKey!!)
    }

    @PluginMethod
    fun sendDefault(call: PluginCall) {
        val content = call.getObject("content");
        val link = content.getJSObject("link")!!;

        val defaultFeed = FeedTemplate(
            content = Content(
                title = content.getString("title")!!,
                description = content.getString("description"),
                imageUrl = content.getString("imageUrl")!!,
                link = Link(
                    webUrl = link.getString("webUrl"),
                    mobileWebUrl = link.getString("mobileWebUrl")
                )
            ),
            buttons = listOf(
                Button(
                    "라이프리로 이동",
                    Link(
                        webUrl = link.getString("webUrl"),
                        mobileWebUrl = link.getString("mobileWebUrl")
                    )
                )
            )
        )
        
        implementation.shareDefault(this.activity, defaultFeed)
    }
}