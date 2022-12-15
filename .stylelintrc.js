module.exports = {
	"extends": [
		"stylelint-config-standard", //基本配置
		"stylelint-config-recommended-vue", // 配置 vue 中 template 样式格式化
		"stylelint-config-recommended-less", // 配置 stylelint less插件
		'stylelint-config-recess-order', //配置 属性的排序（插件包）
	],
	overrides: [
		// 扫描 .vue/html 文件中的<style>标签内的样式
		{
			files: ["**/*.{vue,html}"],
			customSyntax: "postcss-html"
		}
	],
}
