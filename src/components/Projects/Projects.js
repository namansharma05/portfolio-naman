import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import stakingApp from "../../Assets/Projects/token-staking-app.png";
import ChatAppImage from "../../Assets/Projects/ChatApp.png";
import TwitterImage from "../../Assets/Projects/TwitterApp.png";
import MarioImage from "../../Assets/Projects/Mario.png";
import NFTMint from "../../Assets/Projects/nft-minting.png";
import SwapToken from "../../Assets/Projects/swaptokens.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFTMint}
              isBlog={false}
              title="Mint NFT's"
              description="A Decentralized NFT minting website, built on the Goerli Ethereum testnet. Users can seamlessly mint NFTs linked to their personal public addresses, each possessing a unique token ID. The website utilizes pre-saved AI-generated images from the IPFS node for NFT creation. Due to Smart contract's deployment on the Goerli testnet, only 99 limited NFTs resides on the IPFS. users can calim NFT by just a simple click on the mint button."
              ghLink="https://github.com/divyyeshchandra/Mint-NFT"
              demoLink="https://mint-nft-delta-flax.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stakingApp}
              isBlog={false}
              title="Token-Staking-App"
              description="A Token Staking Defi App built on Polygon Blockchain where Users can put the cryptocurrency(DBC) in the Smart Contract for 7 Days, 10 Days, 30 Days or 90 Days and can earn APY% reward for the amount of Days they stake the tokens. The Smart Contract for Token Staking and DBC Cryptocurrency is deployed on the Polygon Mumbai Network."
              ghLink="https://github.com/divyyeshchandra/Token-Staking-App"
              demoLink="https://token-staking-app-flame.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SwapToken}
              isBlog={false}
              title="Uniswap-Clone"
              description="A decentralized application where users have the ability to exchange Matic Mumbai tokens for various other coins, known as CoinA, CoinB, and CoinC. Users can also swap from Coin to Matic Mumbai tokens, and, lastly, they can exchange tokens from one Coin to another, similar to the swap feature in Uniswap. The smart contract for this application has been deployed on the Polygon Mumbai testnet, and each coin has a limit of 100,000."
              ghLink="https://github.com/divyyeshchandra/Uniswap-clone"
              demoLink="https://swap-tokens.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ChatAppImage}
              isBlog={false}
              title="Chat Buddy"
              description="A Decentralized Chat Application built on Plygon Blockchain where users can create account using thier MetaMask wallet address and a unique username and can make friends who are live on the application then could chat with them. The Smart Contract for the Chat App is deployed on the Polygon Mumbai Blockchain. To test the App one can create multiple accounts on the Meta Mask Polygon Mumbai with the username."
              ghLink="https://github.com/divyyeshchandra/Chat-App-3.0"
              demoLink="https://chat-app-3-0.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TwitterImage}
              isBlog={false}
              title="Twitter-3.0"
              description="A Decentralized Twitter Clone App built on Goerli Ethereum Testnet Blockchain where user can perform almost all the operation just like Centerlized Twitter, But for performing all the operations user need to connect to Goerli Testnet using thier Meta Mask wallet. The Smart Contract for this Decentralized application is Deployed on the Goerli Blockchain."
              ghLink="https://github.com/divyyeshchandra/Twitter-Web3"
              demoLink="https://twitter-web3-uiyy.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MarioImage}
              isBlog={false}
              title="Mario-3.0"
              description="A Decentralized Running Mario Game App built on Ropsten Test Network of Ethereum where users can play game just like Subway Suffers or Mario and earn NFT's and Cryptocurrency. User can later claim these rewards connecting thier Meta Mask wallet to the Ropsten Network because both the ERC-721 and ERC-20 Smart Contract is Deployed on this Network."
              ghLink="https://github.com/divyyeshchandra/Mario-3.0"
              demoLink="https://mario-3-0.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
