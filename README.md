# obsidian-one-vault
# Symlink Manager

A plugin for Obsidian that allows you to create and manage symbolic links (symlinks) between your vaults easily. This tool is particularly useful for users who maintain multiple vaults and want to share notes or resources without duplicating content.

## Features

- **Create Symlinks**: Easily create symlinks from one vault to another.
- **User-Friendly Modals**: Select source and target paths using intuitive modal dialogs.
- **Path Filtering**: Filter through available files and folders when selecting paths.

## Installation

### Manual Installation

1. Download the latest release from the [GitHub Releases](https://github.com/your_username/obsidian-symlink-plugin/releases) page.
2. Extract the contents of the ZIP file.
3. Move the extracted folder into your Obsidian plugins directory:
   - On Windows: `C:\Users\<YourUsername>\AppData\Roaming\obsidian\plugins`
   - On macOS: `~/Library/Application Support/obsidian/plugins`
   - On Linux: `~/.config/obsidian/plugins`

4. Enable the plugin in Obsidian:
   - Open Obsidian and go to **Settings** > **Community plugins**.
   - Toggle off **Restricted Mode** if you haven’t already.
   - Find **Symlink Manager** in the list of installed plugins and enable it.

### Using the Command Palette

1. Open the command palette by pressing `Cmd/Ctrl + P`.
2. Type "Create Symlink" and select it from the dropdown.
3. Follow the prompts to select a source path and a target path for your symlink.

## Usage

After enabling the plugin, you can create symlinks between your vaults by following these steps:

1. Invoke the command palette (`Cmd/Ctrl + P`).
2. Select "Create Symlink."
3. Choose a source path from your vault.
4. Choose a target path where you want to create the symlink.
5. A notification will confirm that the symlink has been created successfully.

## Contributing

Contributions are welcome! If you have suggestions, bug reports, or feature requests, please open an issue on GitHub or submit a pull request.

### Development Setup

To set up a development environment for this plugin:

1. Clone this repository:
   ```bash
   git clone https://github.com/your_username/obsidian-symlink-plugin.git
