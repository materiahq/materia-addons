export function Addon(pkg: string) {
    return (constructor) => {
        Addon.prototype.registry[pkg] = {
			ctor: constructor
        };
    };
}

Addon.prototype.registry = {};

Addon.prototype.getModule = function (pkg: string) {
    return this.registry[pkg] && this.registry[pkg].ctor.name;
}