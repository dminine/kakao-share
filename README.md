# kakao-share

Plugin to use the sharing SDK provided by Kakaotalk in capacitor

## Install

```bash
npm install kakao-share
npx cap sync
```

## API

<docgen-index>

* [`init(...)`](#init)
* [`cleanup()`](#cleanup)
* [`createCustomButton(...)`](#createcustombutton)
* [`createDefaultButton(...)`](#createdefaultbutton)
* [`createScrapButton(...)`](#createscrapbutton)
* [`deleteImage(...)`](#deleteimage)
* [`scrapImage(...)`](#scrapimage)
* [`sendCustom(...)`](#sendcustom)
* [`sendDefault(...)`](#senddefault)
* [`sendScrap(...)`](#sendscrap)
* [`uploadImage(...)`](#uploadimage)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(option: { appKey: string; }) => any
```

| Param        | Type                             |
| ------------ | -------------------------------- |
| **`option`** | <code>{ appKey: string; }</code> |

**Returns:** <code>any</code>

--------------------


### cleanup()

```typescript
cleanup() => void
```

--------------------


### createCustomButton(...)

```typescript
createCustomButton(settings: ButtonSettings & CustomSettings) => void
```

| Param          | Type                                                                                                     |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| **`settings`** | <code><a href="#buttonsettings">ButtonSettings</a> & <a href="#customsettings">CustomSettings</a></code> |

--------------------


### createDefaultButton(...)

```typescript
createDefaultButton(settings: ButtonSettings & (DefaultFeedSettings | DefaultListSettings | DefaultLocationSettings | DefaultCommerceSettings | DefaultTextSettings | DefaultCalendarSettings)) => void
```

| Param          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`settings`** | <code><a href="#buttonsettings">ButtonSettings</a> & (<a href="#defaultfeedsettings">DefaultFeedSettings</a> \| <a href="#defaultlistsettings">DefaultListSettings</a> \| <a href="#defaultlocationsettings">DefaultLocationSettings</a> \| <a href="#defaultcommercesettings">DefaultCommerceSettings</a> \| <a href="#defaulttextsettings">DefaultTextSettings</a> \| <a href="#defaultcalendarsettings">DefaultCalendarSettings</a>)</code> |

--------------------


### createScrapButton(...)

```typescript
createScrapButton(settings: ButtonSettings & ScrapSettings) => void
```

| Param          | Type                                                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| **`settings`** | <code><a href="#buttonsettings">ButtonSettings</a> & <a href="#scrapsettings">ScrapSettings</a></code> |

--------------------


### deleteImage(...)

```typescript
deleteImage(settings: { imageUrl: string; }) => Promise<void>
```

| Param          | Type                               |
| -------------- | ---------------------------------- |
| **`settings`** | <code>{ imageUrl: string; }</code> |

--------------------


### scrapImage(...)

```typescript
scrapImage(settings: { imageUrl: string; }) => Promise<{ infos: ImageInfos; }>
```

| Param          | Type                               |
| -------------- | ---------------------------------- |
| **`settings`** | <code>{ imageUrl: string; }</code> |

**Returns:** <code>Promise&lt;{ infos: <a href="#imageinfos">ImageInfos</a>; }&gt;</code>

--------------------


### sendCustom(...)

```typescript
sendCustom(settings: CustomSettings) => void
```

| Param          | Type                                                      |
| -------------- | --------------------------------------------------------- |
| **`settings`** | <code><a href="#customsettings">CustomSettings</a></code> |

--------------------


### sendDefault(...)

```typescript
sendDefault(settings: DefaultFeedSettings | DefaultListSettings | DefaultLocationSettings | DefaultCommerceSettings | DefaultTextSettings | DefaultCalendarSettings) => void
```

| Param          | Type                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`settings`** | <code><a href="#defaultfeedsettings">DefaultFeedSettings</a> \| <a href="#defaultlistsettings">DefaultListSettings</a> \| <a href="#defaultlocationsettings">DefaultLocationSettings</a> \| <a href="#defaultcommercesettings">DefaultCommerceSettings</a> \| <a href="#defaulttextsettings">DefaultTextSettings</a> \| <a href="#defaultcalendarsettings">DefaultCalendarSettings</a></code> |

--------------------


### sendScrap(...)

```typescript
sendScrap(settings: ScrapSettings) => void
```

| Param          | Type                                                    |
| -------------- | ------------------------------------------------------- |
| **`settings`** | <code><a href="#scrapsettings">ScrapSettings</a></code> |

--------------------


### uploadImage(...)

```typescript
uploadImage(settings: { file: FileList; }) => Promise<{ infos: ImageInfos; }>
```

| Param          | Type                        |
| -------------- | --------------------------- |
| **`settings`** | <code>{ file: any; }</code> |

**Returns:** <code>Promise&lt;{ infos: <a href="#imageinfos">ImageInfos</a>; }&gt;</code>

--------------------


### Interfaces


#### ButtonSettings

| Prop            | Type             |
| --------------- | ---------------- |
| **`container`** | <code>any</code> |


#### CustomSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`templateId`**         | <code>number</code>                                                        |
| **`templateArgs`**       | <code><a href="#record">Record</a>&lt;string, unknown&gt;</code>           |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### DefaultFeedSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`objectType`**         | <code>'feed'</code>                                                        |
| **`content`**            | <code><a href="#content">Content</a></code>                                |
| **`itemContent`**        | <code><a href="#itemcontent">ItemContent</a></code>                        |
| **`social`**             | <code><a href="#social">Social</a></code>                                  |
| **`buttonTitle`**        | <code>string</code>                                                        |
| **`buttons`**            | <code>Button[]</code>                                                      |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### Content

| Prop              | Type                                  |
| ----------------- | ------------------------------------- |
| **`title`**       | <code>string</code>                   |
| **`imageUrl`**    | <code>string</code>                   |
| **`link`**        | <code><a href="#link">Link</a></code> |
| **`imageWidth`**  | <code>number</code>                   |
| **`imageHeight`** | <code>number</code>                   |
| **`description`** | <code>string</code>                   |


#### Link

| Prop                         | Type                |
| ---------------------------- | ------------------- |
| **`webUrl`**                 | <code>string</code> |
| **`mobileWebUrl`**           | <code>string</code> |
| **`androidExecutionParams`** | <code>string</code> |
| **`iosExecutionParams`**     | <code>string</code> |


#### ItemContent

| Prop                     | Type                |
| ------------------------ | ------------------- |
| **`profileText`**        | <code>string</code> |
| **`profileImageUrl`**    | <code>string</code> |
| **`titleImageText`**     | <code>string</code> |
| **`titleImageUrl`**      | <code>string</code> |
| **`titleImageCategory`** | <code>string</code> |
| **`items`**              | <code>Item[]</code> |
| **`sum`**                | <code>string</code> |
| **`sumOp`**              | <code>string</code> |


#### Item

| Prop         | Type                |
| ------------ | ------------------- |
| **`item`**   | <code>string</code> |
| **`itemOp`** | <code>string</code> |


#### Social

| Prop                  | Type                |
| --------------------- | ------------------- |
| **`likeCount`**       | <code>number</code> |
| **`commentCount`**    | <code>number</code> |
| **`sharedCount`**     | <code>number</code> |
| **`viewCount`**       | <code>number</code> |
| **`subscriberCount`** | <code>number</code> |


#### Button

| Prop        | Type                                  |
| ----------- | ------------------------------------- |
| **`title`** | <code>string</code>                   |
| **`link`**  | <code><a href="#link">Link</a></code> |


#### DefaultListSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`objectType`**         | <code>'list'</code>                                                        |
| **`headerTitle`**        | <code>string</code>                                                        |
| **`headerLink`**         | <code><a href="#link">Link</a></code>                                      |
| **`contents`**           | <code>Content[]</code>                                                     |
| **`buttonTitle`**        | <code>string</code>                                                        |
| **`buttons`**            | <code>Button[]</code>                                                      |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### DefaultLocationSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`objectType`**         | <code>'location'</code>                                                    |
| **`content`**            | <code><a href="#content">Content</a></code>                                |
| **`address`**            | <code>string</code>                                                        |
| **`addressTitle`**       | <code>string</code>                                                        |
| **`social`**             | <code><a href="#social">Social</a></code>                                  |
| **`buttonTitle`**        | <code>string</code>                                                        |
| **`buttons`**            | <code>Button[]</code>                                                      |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### DefaultCommerceSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`objectType`**         | <code>'commerce'</code>                                                    |
| **`content`**            | <code><a href="#content">Content</a></code>                                |
| **`commerce`**           | <code><a href="#commerce">Commerce</a></code>                              |
| **`buttonTitle`**        | <code>string</code>                                                        |
| **`buttons`**            | <code>Button[]</code>                                                      |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### Commerce

| Prop                       | Type                |
| -------------------------- | ------------------- |
| **`regularPrice`**         | <code>number</code> |
| **`discountPrice`**        | <code>number</code> |
| **`discountRate`**         | <code>number</code> |
| **`fixedDiscountPrice`**   | <code>number</code> |
| **`currencyUnit`**         | <code>string</code> |
| **`currencyUnitPosition`** | <code>number</code> |
| **`productName`**          | <code>string</code> |


#### DefaultTextSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`objectType`**         | <code>'text'</code>                                                        |
| **`text`**               | <code>string</code>                                                        |
| **`link`**               | <code><a href="#link">Link</a></code>                                      |
| **`buttonTitle`**        | <code>string</code>                                                        |
| **`buttons`**            | <code>Button[]</code>                                                      |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### DefaultCalendarSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`objectType`**         | <code>'calendar'</code>                                                    |
| **`idType`**             | <code>'calendar' \| 'event'</code>                                         |
| **`id`**                 | <code>string</code>                                                        |
| **`content`**            | <code><a href="#content">Content</a></code>                                |
| **`buttons`**            | <code>Button[]</code>                                                      |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### ScrapSettings

| Prop                     | Type                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| **`requestUrl`**         | <code>string</code>                                                        |
| **`templateId`**         | <code>number</code>                                                        |
| **`templateArgs`**       | <code><a href="#record">Record</a>&lt;string, unknown&gt;</code>           |
| **`installTalk`**        | <code>boolean</code>                                                       |
| **`serverCallbackArgs`** | <code>string \| <a href="#record">Record</a>&lt;string, unknown&gt;</code> |


#### ImageInfos

| Prop           | Type                                                                                               |
| -------------- | -------------------------------------------------------------------------------------------------- |
| **`original`** | <code>{ url: string; length: number; content_type: string; width: number; height: number; }</code> |


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>

</docgen-api>
