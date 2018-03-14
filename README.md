# Socket new-fb-comment-hook - ver 0.0.1

Description of new-fb-comment-hook

## Index

* [Config](#_config)
* [Endpoints](#_endpoints)
* [Events](#_events)



## Config

* [VERIFY_TOKEN](#_config-VERIFY_TOKEN)
* [SECRET](#_config-SECRET)

|Options | Type | Required|
|--------|------|---------|
|VERIFY_TOKEN|string| Yes |
|SECRET|string| Yes |

* VERIFY_TOKEN<a name="#_config-VERIFY_TOKEN"></a>

Token used in facebook verification challenge

* SECRET<a name="#_config-SECRET"></a>

Webhook secret. All webhook calls without it will be denied.



## Endpoints <a name="_endpoints"></a>

* [new-fb-comment-hook/new-webhook](#_endpoints-new-webhook)
* [new-fb-comment-hook/webhook](#_endpoints-webhook)

#### new-webhook <span style="color:gray">*PRIVATE*</span><a name="_endpoints-new-webhook"></a>

Create facebook webhook for page


###### GET
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">app_id</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">app_secret</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">access_token</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
</table>


* app_id

Your app id

* app_secret

Your app secret

* access_token

Access token



#### webhook<a name="_endpoints-webhook"></a>

Webhook endpoint called by facebook


###### GET
<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">app_id</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">Yes</td>
  </tr>
  <tr>
    <td style="vertical-align:top">secret</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">hub</td>
    <td style="vertical-align:top"><details><summary>object</summary><table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
  </tr>
  <tr>
    <td style="vertical-align:top">mode</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">challenge</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
  <tr>
    <td style="vertical-align:top">verify_token</td>
    <td style="vertical-align:top">string
</td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>
</details></td>
    <td style="vertical-align:top">No</td>
  </tr>
</table>


* app_id

Your app id

* secret

Secret from config.

* hub




## Events <a name="_events"></a>

