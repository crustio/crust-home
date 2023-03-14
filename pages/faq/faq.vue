<template>
  <div class="faq container" style="margin-top: 50px">
    <b-card
      class="card container"
      v-for="(item, index) in newList"
      :key="index"
      align="center"
    >
      <div class="card-body">
        <h5 class="card-title">
          <span style="color: #eaa510;">
            Q:
          </span>
          <span v-if="$store.state.locale === 'zh'">
            {{ item.title }}
          </span>
          <span v-else>
            {{ item.title_en }}
          </span>
        </h5>
        <br />
        <div class="card-text">
          <div
            v-if="$store.state.locale === 'zh'"
            class="content"
            v-html="item.content.replace(/&nbsp;/g, '')"
          ></div>
          <div
            v-else
            class="content"
            v-html="item.content_en.replace(/&nbsp;/g, '')"
          ></div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: "1",
      isPc: true,
      newList: [
        {
          title: "什么是去中心化存储网络？",
          title_en: "What is a decentralized storage network?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;去中心化存储网络是一种网络类型，允许用户以分散式的方式存储和访问其数据，而不依赖于集中式存储提供者或单个存储节点。相反，数据分布在节点网络中，使其更具攻击韧性，并确保用户对其数据具有完全控制权。这些网络通常使用区块链或其他分散式技术来管理数据存储和访问，并可能还包括加密和冗余等功能，以确保存储数据的安全性和可用性。<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust Network是基于Substrate构建的第1层区块链，激励基于IPFS网络上的存储订单和存储节点。通过利用区块链技术，Crust Network已成为最大的去中心化式云存储系统之一，可以轻松托管各种网站、dApps、NFT和个人文件。",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;A decentralized storage network is a type of network that allows users to store and access their data in a decentralized manner, without relying on a centralized storage provider or a single point of failure. Instead, data is distributed across a network of nodes, making it more resilient to attacks and ensuring that users have full control over their data. These networks typically use blockchain or other decentralized technologies to manage data storage and access, and may also incorporate features like encryption and redundancy to ensure the security and availability of stored data.<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust Network is a layer 1 blockchain built on substrate that incentivizes the creation of storage orders, and storage node use on the IPFS network. By utilizing blockchain technology, Crust Network has become one of the largest decentralized cloud storage systems which can host a variety of websites, dApps, NFT’s, and personal files with ease.`,
        },
        {
          title: "Crust和IPFS之间的关系是什么？",
          title_en: "What is the relationship between Crust and IPFS?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;Crust是一个去中心化的存储网络，旨在为用户提供安全、实惠和可靠的存储解决方案。Crust利用的关键技术之一是IPFS（星际文件系统），它是一种协议和网络，旨在创建一种点对点的方法来存储和共享分布式文件系统中的超媒体。<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust建立在IPFS之上，并提供了一个更加用户友好和易于访问的界面来访问IPFS。Crust添加了一些额外的功能和功能，例如去中心化的存储市场、智能合约和跨链能力，使其更适合Web3应用程序。",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Crust is a decentralized storage network that is designed to provide users with secure, affordable, and reliable storage solutions. One of the key technologies that Crust utilizes is IPFS (InterPlanetary File System), which is a protocol and network designed to create a peer-to-peer method of storing and sharing hypermedia in a distributed file system.<br />&nbsp;&nbsp;&nbsp;&nbsp;Crust is built on top of IPFS, and it provides a more user-friendly and accessible interface to access IPFS. Crust adds some additional features and functionality to IPFS, such as decentralized storage markets, smart contracts, and cross-chain capabilities, which make it more suitable for Web3 applications.`,
        },
        {
          title: "Crust网络支持的最大文件大小是多少？",
          title_en: "What is the maximum file size that Crust network supports for uploading?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;用户可以通过Crust Gateway和IPFS客户端上传大小达到32GB的文件。但是，通过Crust Files上传的文件大小最大限制为1GB。",
          content_en: `&nbsp;&nbsp;&nbsp;&nbsp;Users can upload files up to 32GB in size through Crust Gateway and IPFS clients. However, for uploads through Crust Files, the maximum file size is limited to 1GB.`,
        },
        {
          title: "如何使用Crust Apps进行文件存储？",
          title_en: "What is a decentralized storage network?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;进入<a href='https://apps.crust.network/' style='color:#FC7823' target='_blank'>Crust Apps<a>，转到Crust Apps顶部菜单栏->存储市场->存储用户。第一次进入存储用户页面时，您需要在两种工作模式之间进行选择：网关或IPFS。对于非IPFS用户，“通过网关上传文件”是一种更简单的方式。然后，您只需上传文件并下订单即可。<br />&nbsp;&nbsp;&nbsp;&nbsp;文本教程请参考：<a href='https://wiki.crust.network/docs/en/storageUserGuide' style='color:#FC7823' target='_blank'>https://wiki.crust.network/docs/en/storageUserGuide</a> <br />&nbsp;&nbsp;&nbsp;&nbsp;视频教程请参考：<a href='https://www.youtube.com/watch?v=hzpX29sKCVQ&list=PLw4dgIC0HpQUJYLbnFifjO7Y6WOSfdRac' style='color:#FC7823' target='_blank'>https://www.youtube.com/watch?v=hzpX29sKCVQ&list=PLw4dgIC0HpQUJYLbnFifjO7Y6WOSfdRac</a>",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;To enter the application, go to <a href='https://apps.crust.network/' style='color:#FC7823' target='_blank'>Crust Apps</a> top bar -> Storage market -> Storage user. For the first time you enter the Storage User page, you need to choose between the two working modes: Gateway or IPFS. For non-IPFS users, 'Upload files by Gateway' is a easier way. Then you just need to upload the files and place the orders.<br />&nbsp;&nbsp;&nbsp;&nbsp;The text tutorial please refer to: <a href='https://wiki.crust.network/docs/en/storageUserGuide' style='color:#FC7823' target='_blank'>https://wiki.crust.network/docs/en/storageUserGuide</a> <br />&nbsp;&nbsp;&nbsp;&nbsp;The video tutorial please refer to: <a href='https://www.youtube.com/watch?v=hzpX29sKCVQ&list=PLw4dgIC0HpQUJYLbnFifjO7Y6WOSfdRac' style='color:#FC7823' target='_blank'>https://www.youtube.com/watch?v=hzpX29sKCVQ&list=PLw4dgIC0HpQUJYLbnFifjO7Y6WOSfdRac</a>",
        },
        {
          title: "如何使用Crust Files进行文件存储？",
          title_en: "How to use Crust Files for file storage?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;a. 前往Crust Files网站 (<a href='https://apps.crust.network/' style='color:#FC7823' target='_blank'>https://files.storage/)</a>.<br />&nbsp;&nbsp;&nbsp;&nbsp;b. 点击“登录”按钮并选择您喜欢的身份验证方法。您可以使用您的Web3钱包或使用第三方账户（如Google、LinkedIn或Twitter）登录。<br />&nbsp;&nbsp;&nbsp;&nbsp;c. 登录后，您可以将文件拖放到上传到Crust网络。<br />&nbsp;&nbsp;&nbsp;&nbsp;您可以通过Crust Files面板查看和管理已上传的文件。所有文件存储都是完全免费的！",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;a. Go to the Crust Files website (<a href='https://apps.crust.network/' style='color:#FC7823' target='_blank'>https://files.storage/)</a>.<br />&nbsp;&nbsp;&nbsp;&nbsp;b. Click the 'Sign In' button and select your preferred method of authentication. You can use your Web3 wallet or sign in with a third-party account like Google, LinkedIn, or Twitter.<br />&nbsp;&nbsp;&nbsp;&nbsp;c. Once you are signed in, you can drag and drop files to upload them to the Crust network.<br />&nbsp;&nbsp;&nbsp;&nbsp;You can view and manage your uploaded files through the Crust Files dashboard. All files storage are totally FREE via Crust Files!",
        },
		    {
          title: "一旦保存，文件可以存储多久？如果我想永久保存，该怎么做？",
          title_en: "How long can a file be stored once it is saved? If I want to store it permanently, how should I do it? ",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;单个交易（订单）的默认存储时间为6个月。如果您想延长存储时间，Crust为您提供了一个保证池，您可以自定义文件的存储时间，您可以放置更多的CRU，它会自动延长文件的存储时间。因此，您可以自定义需要存储的时间长度。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;The default storage time for a single transaction(order) is 6 months. If you want to extend the storage duration, Crust provides an assurance pool for you to customize the file's storage time, it allows you to put some tokens and will automatically extend the file's storage time.So you can customize how long you need to store.",
        },
		    {
          title: "与Filecoin和Arweave相比，Crust有哪些优势？",
          title_en: "What are the advantages of Crust compared to Filecoin and Arweave? ",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;以下是与Filecoin和Arweave相比的Crust的一些潜在优势：<br />&nbsp;&nbsp;&nbsp;&nbsp;a. 跨链兼容性：Crust旨在与各种区块链（包括Ethereum、Polkadot、Binance Smart Chain等）配合使用。这使开发人员更容易将Crust与其现有项目集成，并为想要在不同链上存储数据的用户提供更多的灵活性。<br />&nbsp;&nbsp;&nbsp;&nbsp;b. 较低的存储成本：Crust提供与Filecoin和Arweave等竞争对手相比较低的存储成本。这可以使需要存储大量数据的用户仅需支付更低的存储费用。<br />&nbsp;&nbsp;&nbsp;&nbsp;c. 更快的访问响应：Crust使用分布式缓存机制来加快经常访问的文件的访问时间。这可以提供比其他去中心化存储网络更快的数据访问速度。<br />&nbsp;&nbsp;&nbsp;&nbsp;d. 更用户友好：Crust旨在通过提供用户友好的界面和工具（例如Crust Files应用程序）使去中心化存储对主流用户更加可访问。这可以使非技术用户更容易利用去中心化存储的好处。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;Here are some potential advantages of Crust compared to Filecoin and Arweave:<br />&nbsp;&nbsp;&nbsp;&nbsp;a. Cross-chain compatibility: Crust is designed to work with a wide range of blockchains, including Ethereum, Polkadot, Binance Smart Chain, and more. This makes it easier for developers to integrate Crust with their existing projects and provides more flexibility for users who want to store data on different chains.<br />&nbsp;&nbsp;&nbsp;&nbsp;b. Lower storage costs: Crust claims to offer lower storage costs compared to competitors like Filecoin and Arweave. This can make it more affordable for users who need to store large amounts of data.<br />&nbsp;&nbsp;&nbsp;&nbsp;c. Faster access times: Crust uses a distributed caching mechanism to speed up access times for frequently accessed files. This can provide faster access to data compared to other decentralized storage networks.<br />&nbsp;&nbsp;&nbsp;&nbsp;d. More user-friendly: Crust aims to make decentralized storage more accessible to mainstream users by providing user-friendly interfaces and tools, such as the Crust Files app. This can make it easier for non-technical users to take advantage of the benefits of decentralized storage.",
        },
		    {
          title: "Crust的主网、Maxwell网络和Shadow网络有什么区别？",
          title_en: "What is the difference between Crust's mainnet, Maxwell network, and Shadow network? ",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;Crust的主网是Crust生态系统的主要区块链网络，其中CRU代币用于交易费用和网络治理。Maxwell网络是Crust的测试网络，允许开发人员在将新功能部署到主网之前进行测试和实验。但是该页面现已下线。<br />&nbsp;&nbsp;&nbsp;&nbsp;Shadow网络是Kusama网络上的平行链，为Polkadot生态系统提供分散式存储解决方案。它建立在Crust协议之上，为不同的区块链提供跨链存储能力。CSM代币用于Shadow网络的交易费用和网络治理。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;Crust's mainnet is the primary blockchain network for the Crust ecosystem, where the CRU token is used for transaction fees and network governance. The Maxwell network is a test network for Crust that allows developers to test and experiment with new features before deploying them to the mainnet. But the page is offline now.<br />&nbsp;&nbsp;&nbsp;&nbsp;The Shadow network is a parachain on the Kusama network that provides decentralized storage solutions for the Polkadot ecosystem. It is built on the Crust protocol and provides cross-chain storage capabilities for different blockchains. The CSM token is used in the Shadow network for transaction fees and network governance.",
        },
		    {
          title: "哪些交易所目前支持Crust？主网CRU可以在哪里交易？",
          title_en: "What exchanges currently support Crust? Where can the mainnet CRU be traded?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;目前，CRU可以在多个交易所进行交易，包括Huobi、Gate.io、MEXC和Uniswap。支持CRU的交易所列表可能会随时间而变化，因此最好通过官方Crust Network网站或社交媒体账户查看最新信息。<br />&nbsp;&nbsp;&nbsp;&nbsp;至于购买主网CRU，它可以在火币、Gate.io和MEXC上交易。此外，用户还可以直接在Crust Swap（<a href='https://swap.crust.network/#/swap' style='color:#FC7823' target='_blank'>https://swap.crust.network/#/swap</a>）上购买主网CRU。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;Currently, CRU can be traded on several exchanges including Huobi, Gate.io, MEXC, and Uniswap. The list of exchanges supporting CRU may change over time, so it's best to check with the official Crust Network website or social media accounts for the latest information.<br />&nbsp;&nbsp;&nbsp;&nbsp;As for purchasing mainnet CRU, it is available for trading on Huobi, Gate.io, and MEXC. Additionally, users can also purchase mainnet CRU directly on Crust Swap (<a href='https://swap.crust.network/#/swap' style='color:#FC7823' target='_blank'>https://swap.crust.network/#/swap</a>).",
        },
		    {
          title: "如何使用Crust的插件钱包？还有哪些钱包支持Crust？",
          title_en: "How to use Crust's plugin wallet? What other wallets support Crust?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;Crust钱包仅用于与Crust Maxwell/主网网络进行交互，不支持ERC20网络上的CRU代币。用户可以通过两种方式安装Crust钱包：<br />&nbsp;&nbsp;&nbsp;&nbsp;a. Chrome应用商店: 用户可以通过Chrome应用商店安装Crust钱包。<br />&nbsp;&nbsp;&nbsp;&nbsp;b. 直接安装压缩包: 用户也可以通过压缩包直接安装Crust钱包。<a href='https://wiki.crust.network/docs/en/crustWallet/' style='color:#FC7823' target='_blank'>https://wiki.crust.network/docs/en/crustWallet</a><br />&nbsp;&nbsp;&nbsp;&nbsp;请注意，当在Crust钱包上创建新帐户时，用户需要妥善存储帐户的助记词和备份文件，因为一旦帐户丢失，帐户中的资产将永久丢失。<br />&nbsp;&nbsp;&nbsp;&nbsp;其他支持CRU（主网）的钱包包括Polkadot.js、Talisman、Subwallet、Tokenpocket和Math Wallet。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;The Crust Wallet is only used for interacting with the Crust Maxwell/MainNet network and does not support CRU tokens on the ERC20 network. Users can install the Crust Wallet in two ways:<br />&nbsp;&nbsp;&nbsp;&nbsp;a. Chrome APP Store<br />&nbsp;&nbsp;&nbsp;&nbsp;Users can install the Crust Wallet through the Chrome App Store.Direct installation of the compressed package.<br />&nbsp;&nbsp;&nbsp;&nbsp;b. Direct installation of the compressed package<br />&nbsp;&nbsp;&nbsp;&nbsp;Users can also install the Crust Wallet directly through the compressed package:<a href='https://wiki.crust.network/docs/en/crustWallet/' style='color:#FC7823' target='_blank'>https://wiki.crust.network/docs/en/crustWallet</a><br />&nbsp;&nbsp;&nbsp;&nbsp;Please note that when creating a new account on the Crust Wallet, users need to properly store the account's mnemonic phrase and backup file because once the account is lost, the assets in the account will be permanently lost.<br />&nbsp;&nbsp;&nbsp;&nbsp;Other wallets that support CRU(Mainnet) include Polkadot.js, Talisman, Subwallet, Tokenpocket, and Math Wallet.",
        },
		    {
          title: "在哪里可以查看Crust网络的数据？当前流通量在哪里可以查看？",
          title_en: "Where can we check out the data of Crust Network? Where can the current circulation be viewed? ",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;您可以在<a href='https://crust.subscan.io/' style='color:#FC7823' target='_blank'>https://crust.subscan.io/</a> 区块浏览器上查看Crust网络的数据。CoinMarketCap上的数据可能不准确，因为它仅每三个月更新一次。建议参考Subscan和CoinGecko以获取最新和准确的CRU流通量信息。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;You can check the data of Crust Network on its block explorer at <a href='https://crust.subscan.io/' style='color:#FC7823' target='_blank'>https://crust.subscan.io/</a>. However, the data on CoinMarketCap may not be accurate, as it is only updated once every three months. It is recommended to refer to Subscan and CoinGecko for up-to-date and accurate information on the current circulation of CRU.",
        },
		    {
          title: "Crust的总量是多少？是无限的吗？",
          title_en: "What is the total amount of Crust? Is it infinite? ",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;CRU的总量将在15年内接近5000万。年产量为前一年的88%，从第一年的500万开始。这些信息可以在Crust Network白皮书中找到。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;The total amount of CRU is not infinite, it will approach 50 million within the 15 years from the Mainnet launch. The annual production rate is 88% of the previous year's amount, starting with 5 million in the first year. This information can be found in the Crust Network whitepaper.",
        },
		    {
          title: "现在可以在Crust应用程序上抵押CRU吗？",
          title_en: "Can CRU be staked on Crust apps now?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;用户可以在Crust Apps上抵押CRU，并获得CRU奖励。为了获得奖励，用户需要参考节点的担保费和担保人的APY。更多详细信息请参见：<a href='https://wiki.crust.network/docs/en/guarantor' style='color:#FC7823' target='_blank'>https://wiki.crust.network/docs/en/guarantor</a> 此外，CRU还可以用于治理目的，参与Crust网络的决策过程。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;Users can stake CRU on Crust's apps, and earn CRU rewards. In order to receive rewards, users will need to reference the node's guarantee fee and APY of the guarantor. More details please refer to:<a href='https://wiki.crust.network/docs/en/guarantor' style='color:#FC7823' target='_blank'>https://wiki.crust.network/docs/en/guarantor</a> Additionally, CRU can also be staked for governance purposes to participate in the decision-making process of the Crust network.",
        },
		    {
          title: "如何联系 Crust 的商务和开发团队？",
          title_en: "How to contact Crust's BD and Dev team?",
          content: "&nbsp;&nbsp;&nbsp;&nbsp;a. 电子邮件：您可以通过 hi@crust.network 或 ludwig@crust.network 与 BD 团队联系<br />&nbsp;&nbsp;&nbsp;&nbsp;b.  Discord：您可以加入 Crust 的 Discord 频道（<a href='https://discord.gg/MvVWRmnpRq' style='color:#FC7823' target='_blank'>https://discord.gg/MvVWRmnpRq</a>）并在那里与开发团队沟通。<br />&nbsp;&nbsp;&nbsp;&nbsp;c. Telegram：您可以加入 Crust 的 Telegram 群（<a href='https://t.me/CrustNetwork' style='color:#FC7823' target='_blank'>https://t.me/CrustNetwork</a>）并与团队沟通。",
          content_en: "&nbsp;&nbsp;&nbsp;&nbsp;a. Email: You can reach out to BD team at hi@crust.network or ludwig@crust.network<br />&nbsp;&nbsp;&nbsp;&nbsp;b. You can join Crust's Discord channel at <a href='https://discord.gg/MvVWRmnpRq' style='color:#FC7823' target='_blank'>https://discord.gg/MvVWRmnpRq</a> and communicate with the dev team there.<br />&nbsp;&nbsp;&nbsp;&nbsp;c. Telegram: You can join Crust's Telegram group at <a href='https://t.me/CrustNetwork' style='color:#FC7823' target='_blank'>https://t.me/CrustNetwork</a> and communicate with the team there.",
        },
      ],
    }
  },
  methods: {
    handleChange() {
      // console.log(2)
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  border: none;
  .card-text {
    text-align: left;
  }
}
</style>
