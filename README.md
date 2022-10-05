# You Vs. A Billionaire

In 2021, Elon Musks's net worth grew by an estimated $121 billion. Visit [You Vs. A Billionaire](https://youvsabillionaire.com) to see how you stack up.

## About

Since I was a kid, I've been fascinated by billionaires. Not because I wanted to be one necessarily, more so the way people are fascinated by alien landscapes or weird bugs. _How the heck do these things exist in our world?_

I've thought a lot about wealth inequality in recent years after serving as a Peace Corps volunteer in Peru, and reading William MacAskill's wonderful book [Doing Good Better](https://www.effectivealtruism.org/doing-good-better/). It's a topic that I belive more people should do more thinking about, and my hope is that this project can help spark some awareness, curiosity, and conversations in that direction.

## Inspiration

You Vs. A Billionaire was heavily inspried by Brad Templeton's article - [Bill Gates Wealth Index](https://www.templetons.com/brad/billg.html).
Reading Brad's article is one of my earliest internet memories. It has stuck with me ever since I first came across it over a dial-up AOL connection.

As mentioned on the site, You Vs. A Billionaire was of course inspired by William MacAskill and the Effective Altruism movement as well.

## How It Works

You Vs. A Billionaire is built as a single page React app, with the [AOS library](https://github.com/michalsnik/aos) responsible for handling smooth scrolling animations. State is managed with simple `useState()` hooks and prop drilling as the application only requires a single user interaction: the income input.

You Vs. A Billionaire was originally launched in 2021 and featured Jeff Bezos as the site's villain as he was the richest person in the world at that time, and was also coming off a year in which his wealth grew a ridiculous $72 billion.

Alas, in 2021 Jeff was dethroned by perhaps America's most polarizing billionaire, Elon Musk, who that year saw his wealth grow by $121 billion.

To me, there does some to be something uniquely evil about Bezos though, so I wanted the ability to quickly make him the site's featured billionaire without having to worry about writing and deploying new code. For this, I used [LaunchDarkly](https://github.com/launchdarkly/react-client-sdk).

## LaunchDarkly

There are two feature flags used in You Vs. A Billionare.

1. The aformentioned `billionaire-data-override` flag that, when toggled on, serves Bezos data instead of Elon Musk. Code reference [here](https://github.com/joegelay/you-vs-a-billionaire/blob/main/src/App.js#L36).

   - Setup this flag in your own LaunchDarkly account by creating a JSON flag variation (be sure to check the flag's SDKs using Client-side key checkbox) that serves Jeff Bezos data when targeting is on, and Elon Musk data when targeting is off.
   - Bezos JSON (poor Bezos only made $5 billion in 2021):

   ```
       {
           "earnings": 5000000000,
           "firstName": "Jeff",
           "fullName": "Jeff Bezos"
       }
   ```

   - Elon JSON:

   ```
       {
           "earnings": 121000000000,
           "firstName": "Elon",
           "fullName": "Elon Musk"
       }
   ```

2. The second feature flag is called `show-latte-comparison`, which toggles whether a user is shown the [ComparisonThree.js](https://github.com/joegelay/you-vs-a-billionaire/blob/main/src/pages/ComparisonThree.js) page based on their inputted salary. Code reference [here](https://github.com/joegelay/you-vs-a-billionaire/blob/main/src/components/ContentPages.js#L46).

   This works by taking advantage of LaunchDarkly's custom user attributes, and only shows the component to those who have a salary over a certain amount. PII is protected as user keys are randomally generated via [react-uuid](https://www.npmjs.com/package/react-uuid). See code [here](https://github.com/joegelay/you-vs-a-billionaire/blob/main/src/App.js#L20) where the user salary data is set from within [SalaryInput.js](https://github.com/joegelay/you-vs-a-billionaire/blob/main/src/components/SalaryInput.js#L11).

   While on the surface this seems like something that could be achieved with a simple `if()...` in the code, I set up this flag to demonstrate an area of the site that, in the future, could be interesting to run [LaunchDarkly Experiments](https://docs.launchdarkly.com/home/about-experimentation) (currently paywalled 😭). For example, does hiding the final comparison page increase the likelihood that lower-income site visitors will click the link to visit [GiveWell.org](https://www.givewell.org/) at the end of the site? If so, what should that income limit be? This could be an interesting hypothesis to test with the Experiments feature.

   - Setup this flag by creating a Boolean flag variation that serves `True` to users that match the rule: If `salary` >= 5000 (or any income number you want to test).

     - A limitation of setting up this feature flag is that you won't be able to select `salary` as a user attribute in the targeting setup until LaunchDarkly receives a user with the custom `salary` attribute from the client-side application. More details on custom user attributes can be found [here](https://docs.launchdarkly.com/home/users/custom-attributes).

   - Again, be sure to check the flag's 'SDKs using Client-side key' checkbox while creating the flag.

   - The Default rule should serve `false`.

## Local Set Up

1. Fork the public repo, and then clone the project to your machine.
2. In the root directory, create a `.env` file with the following variable, updating the value to be a `string` of your personal LaunchDarkly Client-Side ID:

```
REACT_APP_LD_CLIENT_SIDE_ID='<your-launchdarkly-client-side-id-here>';
```

- You can find your Client-Side ID by visting your LaunchDarkly dashboard, and searching in the top-right corner for "Copy SDK key for the current environment" and then choosing "Client-side ID".

3. `npm install` to install all packages.
4. `npm run start` to launch a local server.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
