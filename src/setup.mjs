export async function setup(ctx) {
	await ctx.gameData.addPackage('src/data.json');
	ctx.onModsLoaded(ctx => {
		mod.api.mythCombatSimulator?.registerNamespace('signalHell');
	});
}