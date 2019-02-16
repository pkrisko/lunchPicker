             _           _            _                _            _   _         _
            /\ \        /\ \         / /\             /\ \         /\_\/\_\ _    /\ \
           /  \ \      /  \ \       / /  \           /  \ \____   / / / / //\_\ /  \ \
          / /\ \ \    / /\ \ \     / / /\ \         / /\ \_____\ /\ \/ \ \/ / // /\ \ \
         / / /\ \_\  / / /\ \_\   / / /\ \ \       / / /\/___  //  \____\__/ // / /\ \_\
        / / /_/ / / / /_/_ \/_/  / / /  \ \ \     / / /   / / // /\/________// /_/_ \/_/
       / / /__\/ / / /____/\    / / /___/ /\ \   / / /   / / // / /\/_// / // /____/\
      / / /_____/ / /\____\/   / / /_____/ /\ \ / / /   / / // / /    / / // /\____\/
     / / /\ \ \  / / /______  / /_________/\ \ \\ \ \__/ / // / /    / / // / /______
    / / /  \ \ \/ / /_______\/ / /_       __\ \_\\ \___\/ / \/_/    / / // / /_______\
    \/_/    \_\/\/__________/\_\___\     /____/_/ \/_____/          \/_/ \/__________/

Simple program to generate a string which can be used to invoke a poll command, so we can vote on a place to eat!

This code is run on Node.js 8.10 on AWS Lambda and invoked through API Gateway.

Then, I used Slack's built-in "Slash Commands" app which is part of custom integrations.

Ultimately, it uses [Simple Poll](https://simplepoll.rocks/) to create a nice little UI and let people pick what they want for lunch!