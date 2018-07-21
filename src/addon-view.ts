export function AddonView(pkg: string) {
    return (constructor) => {
        AddonView.prototype.registry[pkg] = {
			ctor: constructor
        };
    };
}

AddonView.prototype.registry = {};

AddonView.prototype.getComponent = function (pkg: string) {
    return this.registry[pkg] && this.registry[pkg].ctor;
}