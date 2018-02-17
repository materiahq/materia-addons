import { Addon } from "./addon";

export class AddonManager {
	getLogo(pkg: string): string {
		return Addon.prototype.getLogo(pkg);
	}

	getSetup(pkg: string): any[] {
		return Addon.prototype.getSetup(pkg);
	}

	getName(pkg: string): string {
		return Addon.prototype.getAddonName(pkg);
	}

	getType(pkg: string) {
		return Addon.prototype.getAddonType(pkg);
	}

	getProviders() {
		return Addon.prototype.getProviders();
	}
}
