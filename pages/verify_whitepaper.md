---
layout: article
title: 群验证白皮书
permalink: /verify_whitepaper/
---

## SJTU-Plus 加群验证服务白皮书

### 系统结构

本系统主要由令牌签发和令牌验证两部分构成。

令牌签发部分是一个 Web 服务。用户在我们的网站上通过 jAccount 登录，然后输入 QQ 号码。系统将针对该 QQ 号码签发一个带有时间戳的令牌。

令牌验证由 QQ 群 Bot 管理员进行。当用户申请加入 QQ 群并在验证信息中提交该令牌时，QQ 群 Bot 会拦截加群请求并进行令牌验证。如果令牌验证通过，Bot 可以检查时间戳是否符合其配置中的有效期，并做出允许进群或拒绝进群的决定。

### 基于 AES-CMAC 的令牌方案

该方案要求签发服务器和验证服务器配置一个相同的 AES 密钥 secret。当用户提交 QQ 号给签发服务器时，签发服务器生成一个口令 Token。

```
Token = Base58Encode(timestamp || AES-CMAC(secret, timestamp || qq_number))
```

当用户申请加群时，验证服务器（QQ 群 Bot 管理员）首先执行 Base58 解码，提取出时间戳，然后验证 MAC。

该方案的优点是服务器不需要存储任何业务数据，且管理 Bot 不需要与签发服务器进行任何的通信。该方案的缺点是生成的 Token 通常需要比较长的长度，使用 AES-CMAC 生成的 Base58 编码的 Token 是一个长度为 28 的字符串。且随着 Token 中需要附加的明文信息增多，Token 的长度还会进一步增大。
