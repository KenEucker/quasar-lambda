# quasar-lambda
An AWS Lambda function handler for the quasar runtime

To use this in an AWS Lambda function, use the following code snippet:

```
QuasarLambda = require("@digitaltrends/quasar-lambda");

exports.handler = async params => {
	const quasarLambda = new QuasarLambda();

	return await quasarLambda.handler(params);
};
```
