export interface IMateriaAddonComponentConfig {
	package: string
	entryComponent?: boolean
}

export function AddonComponent(config: IMateriaAddonComponentConfig) {
	return constructor => {
		if ( ! AddonComponent.prototype.registry[config.package]) {
			AddonComponent.prototype.registry[config.package] = []
		}
		AddonComponent.prototype.registry[config.package] = [
			{
				ctor: constructor,
				entryComponent: !! config.entryComponent
			},
			...AddonComponent.prototype.registry[config.package]
		];
	};
}

AddonComponent.prototype.registry = {};

AddonComponent.prototype.getComponents = function(pkg: string) {
	return this.registry[pkg] && this.registry[pkg].map(t => t.ctor) || [];
};

AddonComponent.prototype.getEntryComponents = function(pkg: string) {
	return this.registry[pkg] && this.registry[pkg]
		.filter(t => t.entryComponent)
		.map(t => t.ctor) || []
}
