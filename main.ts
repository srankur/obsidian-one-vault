import { Plugin } from 'obsidian';
import { SymlinkManager } from './symlinkManager';
import { UserInput } from './userInput';

export default class SymlinkPlugin extends Plugin {
    private symlinkManager: SymlinkManager;
    private userInput: UserInput;

    async onload() {
        this.symlinkManager = new SymlinkManager(this);
        this.userInput = new UserInput(this.app);

        // Add commands to create symlinks
        this.addCommand({
            id: 'create-symlink',
            name: 'Create Symlink',
            callback: async () => await this.createSymlink(),
        });
    }

    private async createSymlink() {
        const sourcePath = await this.userInput.getSourcePath();
        if (!sourcePath) return; // Handle cancelation

        const targetPath = await this.userInput.getTargetPath();
        if (!targetPath) return; // Handle cancelation

        this.symlinkManager.createSymlink(sourcePath, targetPath);
    }

    async onunload() {
        // Cleanup if necessary when unloading the plugin
    }
}