export interface IMateriaAddonConfig {
	package: string,
	name?: string,
	logo: string,
	deps?: string[],
	setup?: any[]
}

export function Addon(config: IMateriaAddonConfig) {
    return (constructor) => {
        Addon.prototype.registry[config.package] = {
			ctor: constructor,
			logo: config.logo,
			setup: config.setup,
            deps: config.deps || []
        };
    };
}

Addon.prototype.registry = {};

Addon.prototype.getProviders = function () {
    var registry = this.registry;
    return Object.keys(registry).map(function (key) {
        return {
            provide: key,
            useClass: registry[key].ctor,
            deps: registry[key].deps
        };
    });
};

Addon.prototype.getName = function (pkg: string) {
    return this.registry[pkg].name;
}

Addon.prototype.getSetup = function (pkg: string) {
    return this.registry[pkg].setup;
}

Addon.prototype.getLogo = function (pkg: string) {
    return this.registry[pkg].logo;
}

Addon.prototype.getComponent = function (pkg: string) {
    return this.registry[pkg].ctor;
}