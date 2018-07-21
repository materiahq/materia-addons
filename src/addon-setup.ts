export function AddonSetup(pkg: string) {
	return constructor => {
		AddonSetup.prototype.registry[pkg] = {
			ctor: constructor
		};
	};
}

AddonSetup.prototype.registry = {};

AddonSetup.prototype.getComponent = function(pkg: string) {
	return this.registry[pkg] && this.registry[pkg].ctor;
};
