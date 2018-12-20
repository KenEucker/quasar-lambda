quasar = require("@digitaltrends/quasar");

class QuasarLambda {
	constructor() {
		const packageJson = require("./package.json");

		quasar.logQuasarLogo("QuasarLambda", packageJson, "yellow");
		quasar.config.init(null, '/tmp', null);
		quasar.createOutputFolders();
	}

	handler(params) {
		return new Promise(resolve => {
			const buildArgs = params;
			if (buildArgs.logLevel) {
				quasar.setLogLevel(buildArgs.logLevel);
				quasar.logInfo("set log level to", buildArgs.logLevel);
			}

			// TODO: Remove
			quasar.setLogLevel("debug");
			buildArgs.noPrompt = true;

			return quasar.runQuasar(buildArgs.qType, buildArgs, () => {
				return resolve({
					buildArgs
				});
			});
		});
	}
}

module.exports = QuasarLambda;