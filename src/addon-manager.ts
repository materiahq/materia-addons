import { Addon } from "./addon";
import { AddonSetup } from "./addon-setup";
import { AddonView } from "./addon-view";

export class AddonManager {
	getViewComponent(pkg: string) {
		return AddonView.prototype.getComponent(pkg);
	}

	getSetupComponent(pkg: string) {
		return AddonSetup.prototype.getComponent(pkg);
	}

	getModule(pkg: string) {
		return Addon.prototype.getModule(pkg);
	}
}
