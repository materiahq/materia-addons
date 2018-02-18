export interface IMateriaAddonSetupConfig {
	package: string;
	deps?: string[];
}

export function AddonSetup(config: IMateriaAddonSetupConfig) {
	return constructor => {
		AddonSetup.prototype.registry[config.package] = {
			ctor: constructor,
			deps: config.deps || []
		};
	};
}

AddonSetup.prototype.registry = {};

AddonSetup.prototype.getProviders = function() {
	var registry = this.registry;
	return Object.keys(registry).map(function(key) {
		return {
			provide: key,
			useClass: registry[key].ctor,
			deps: registry[key].deps
		};
	});
};

AddonSetup.prototype.getComponent = function(pkg: string) {
	return this.registry[pkg] && this.registry[pkg].ctor;
};
