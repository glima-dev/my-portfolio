// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  AboutArea,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I{" "}
              <Text as="span" type="heading1" color="brand1">
                love
              </Text>{" "}
              creating and{" "}
              <Text as="span" type="heading1" color="brand1">
                developing
              </Text>{" "}
              projects
            </Text>
            <Text type="body1" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <AboutArea id="about-me">
        <Container>
          <Text as="h2" type="heading2" color="grey5">
            About me
          </Text>
          <Text type="body1" color="grey2">
            <br />
            I am a software development student specializing in web platforms.
            With a background in radio frequency engineering and embedded
            systems programming, I embarked on my development journey in 2021. I
            consider myself a passionate enthusiast of emerging technologies in
            the market, continuously learning and expanding my knowledge every
            day.
            <br />
            <br />
            My primary focus lies in front-end development, utilizing
            technologies such as JavaScript, TypeScript, React, React Native,
            and Node.js, among others, to create high-level web and mobile
            applications with added value. When it comes to the back-end
            environment, I rely on technologies like Express.js, PostgreSQL,
            MySQL, and TypeORM to build highly scalable applications.
            <br />
            <br />
            I pride myself on being agile and consistent in learning new
            technologies, and I possess a high adaptability to change. I am
            always ready to take on any challenge that comes my way! If I were
            to define myself in three words, they would undoubtedly be:
            optimistic, persevering, and dedicated! =D
            <br />
            <br />
            Here's a summary of my skills:
            <br />
            <br />
            Front-end development: HTML5, CSS3, Figma, UX fundamentals, Semantic
            Web, REST API consumption and construction, Hooks, State Management,
            Redux, Class Components. Version control: Gitflow, Git/GitHub,
            Test-Driven Development (TDD), Quality Assurance, Jest, Cypress.
            Project management and control: JIRA, Trello, Scrum, Agile
            Methodologies, Kanban, Business Management, Project Management
            (PMBOK). Tools: Advanced Excel (Macros, VBA, Dashboards), AutoCAD
            2D/3D.
            <br />
            <br />
            With my diverse background and expertise, I am well-equipped to
            tackle new challenges and contribute to innovative projects. I am
            excited about the opportunities that lie ahead, and I am committed
            to continuous growth and professional development in the field of
            software development. Let's create something amazing together!
            <br />
            <br />
            <br />
          </Text>
        </Container>
      </AboutArea>
      <Contacts />
    </main>
  );
};
