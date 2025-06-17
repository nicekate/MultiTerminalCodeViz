# 终端主题配置 - Solarized Light

本项目已统一配置为使用 **Solarized Light** 主题，以确保在所有终端环境中都有一致的视觉体验。

## 🎨 配置的主题

### Solarized Light 配色方案
- **背景色**: `#fdf6e3` (浅米色)
- **前景色**: `#657b83` (深灰蓝)
- **强调色**: 使用 Solarized 标准调色板

### ANSI 颜色映射
- **Black**: `#073642` / `#002b36`
- **Red**: `#dc322f` / `#cb4b16`
- **Green**: `#859900` / `#586e75`
- **Yellow**: `#b58900` / `#657b83`
- **Blue**: `#268bd2` / `#839496`
- **Magenta**: `#d33682` / `#6c71c4`
- **Cyan**: `#2aa198` / `#93a1a1`
- **White**: `#eee8d5` / `#fdf6e3`

## 📁 配置文件说明

### 1. VS Code 配置
- **文件**: `.vscode/settings.json`
- **作用**: 配置 VS Code 集成终端使用 Solarized Light 主题
- **包含**: 终端颜色、字体、配置文件等设置

### 2. VS Code 扩展推荐
- **文件**: `.vscode/extensions.json`
- **作用**: 推荐安装 Solarized 主题扩展
- **推荐扩展**: `ryanolsonx.solarized`

### 3. macOS Terminal 配置
- **文件**: `solarized-light.terminal`
- **作用**: macOS 系统终端的 Solarized Light 配置文件
- **使用方法**: 双击文件导入到 Terminal.app

### 4. iTerm2 配置
- **文件**: `solarized-light.itermcolors`
- **作用**: iTerm2 终端的 Solarized Light 颜色配置
- **使用方法**: 在 iTerm2 中导入颜色配置

### 5. 应用内主题
- **文件**: `src/data/colorThemes.ts`
- **作用**: React 应用内的终端组件主题配置
- **默认主题**: 已设置为 `solarizedLight`

## 🚀 如何应用配置

### VS Code
1. 打开项目后，VS Code 会自动应用 `.vscode/settings.json` 中的配置
2. 安装推荐的 Solarized 主题扩展
3. 重启 VS Code 以确保所有设置生效

### macOS Terminal
1. 双击 `.terminal-config/solarized-light.terminal` 文件
2. 在 Terminal 偏好设置中将 "Solarized Light" 设为默认配置

### iTerm2
1. 打开 iTerm2 偏好设置
2. 进入 Profiles → Colors
3. 点击 "Color Presets..." → "Import..."
4. 选择 `.terminal-config/solarized-light.itermcolors` 文件
5. 应用 "Solarized Light" 配色方案

### 其他终端
对于其他终端应用，请参考相应的文档来应用 Solarized Light 主题。

## 🔧 自定义配置

如果需要调整颜色配置，请修改以下文件：
- **应用内主题**: `src/data/colorThemes.ts`
- **VS Code 终端**: `.vscode/settings.json`
- **系统终端**: 相应的配置文件

## 📝 注意事项

1. **字体**: 建议使用等宽字体，如 Monaco、Menlo 或 Fira Code
2. **兼容性**: 配置文件已针对不同平台进行优化
3. **更新**: 如果修改了主题配置，请确保所有配置文件保持一致

## 🎯 验证配置

配置完成后，您应该看到：
- 浅色背景 (`#fdf6e3`)
- 深色文字 (`#657b83`)
- 符合 Solarized Light 标准的 ANSI 颜色
- 在所有终端环境中保持一致的外观
