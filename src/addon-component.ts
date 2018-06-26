export interface IMateriaAddonComponentConfig {
	package: string
}

export function AddonComponent(config: IMateriaAddonComponentConfig) {
	return constructor => {
		if ( ! AddonComponent.prototype.registry[config.package]) {
			AddonComponent.prototype.registry[config.package] = []
		}
		AddonComponent.prototype.registry[config.package] = [
			constructor,
			...AddonComponent.prototype.registry[config.package]
		];
	};
}

AddonComponent.prototype.registry = {};

AddonComponent.prototype.getComponents = function(pkg: string) {
	return this.registry[pkg];
};
