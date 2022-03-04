# CommunityUI Contributing Guidelins

## Getting started

1. Use your preferred method to clone the repository. `git clone https://github.com/open-code-academy/community-ui.git`
2. Run `npm install` to install all dependencies.
3. Run the command `npm run setup` to set up husky and other tooling.
4. Run the command `npm run develop` in order to start up your Storybook server.
   From here you will be able to develop components in an isolated way, using the storybook integration.
   You can find more information about storybook in the [storybook documentation](https://storybook.js.org/docs/react/get-started/introduction)

## Contributing

We welcome anyone to contribute to CommunityUI. This project started as a way to get aspiring engineers
involved with and experience with industry standard technologies and practices. In order
to provide the highest quality experience for all who contribute, some general guidelines and
best-practices have been laid out below.

Join the [OpenCodeAcademy.org discord server](https://discord.gg/feCpvsXFBf) (if you haven't already), to find support and mentorship, or to just enjoy the community.

### Guidelines

1. We will strive for 100% _reasonable_ test coverage.
    - What does that mean? This means that we will write tests for **every** situation where it makes sense to.
      Rather than enforcing a 100% test coverage standard we will have targeted and feature driven testing.
      This will prevent the project from ending up with an extremely long-running test suite with
      filler tests that were written only for the coverage percentage,
    - Testing is mandatory. PR's will not be accepted if there are no unit-tests, unless there is a good reason for not having tests.
    - All test files should be named adhering to the following convention: IF a component is named `Button.component.ts` the test will be named `Button.test.ts`
2. No PR's without an accompanying issue.
    - This allows us to maintain records of why we make decisions, and to keep conversations and discussions in close proximity to the resources
      they concern.
    - It is acceptable to create issues, but if you do, be aware that there may be discussion that must be had before checking in the work.
3. We will use [convential commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) for our commit messages.
    - If you need help with the conventional commits, you may run the command `npm run cz` to run commitizen without installing,
      or alternatively you may use `npm run setup:cz` which will install it for you globally (you may need to run with sudo).
    - commitizen is an open source tool which helps to properly format conventional commits messages.
    - We also use husky to enforce commit messages. If you try to make a commit that doesn't follow conventional commits
      standards, it will be rejected. If you get an error, but you are CERTAIN that your commit message is proper, you may
      use the flag `--no-verify` to prevent husky from screening your commit.
4. Branch naming standards will be followed using very similar names as conventional commits
    - same as you would with a commit message, prefix the branch with the type of change being made
    - Follow that keyword with a "/" then the issue number, then and "\_" then use kabob case for the rest of the branch name
    - Example: feat/#3_add-readme, perf/#40_fix-slow-component, fix/#22_padding-error
5. File naming conventions:
    - File names should start with the component or name of the file, as you usually would name a file, followed by the function of the file, then the file extension.
    - We will use .ts or .js for all non-jsx/tsx related files, and we will use .tsx and .jsx for all files which contain tsx/jsx respectively
    - Example `Button.component.tsx`, `Button.test.ts`, `Button.types.ts`, `Button.constants.ts`, `Button.stories.tsx`
    - Exception to this rule is the mandatory `index.ts` that must reside in each of the directories.
6. When raising a pull request, you should use the [pull request template](https://github.com/open-code-academy/community-ui/tree/main/docs/PR_TEMPLATE.md)
    - PR's must include the following sections: "Summary", "What was changed?", "Why was this important?", "Testing?" (with an explanation why not, if none)
    - Include a statement in the summary that indicates which issue the PR resolves, by including the phrase `resolves #<issue_number>`.
        - Example: you are working on issue #5, simply add a statement that says `resolves #5` to the summary section, and github will link that issue for you
7. Getting an issue assigned to you:
    - If you think you would like to get an issue assigned to you, comment that you would like to work on it, and we will assign it to you.
8. PLEASE make sure you update/add documentation where appropriate
