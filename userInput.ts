import { SuggestModal, Modal, App, TFile } from 'obsidian';

export class PathSelectModal extends Modal {
    private onSelect: (path: string) => void;
    private paths: string[];

    constructor(app: App, paths: string[], onSelect: (path: string) => void) {
        super(app); // Call the constructor of the base Modal class
        this.paths = paths;
        this.onSelect = onSelect;
    }

    onOpen() {
        const { contentEl } = this;

        contentEl.createEl('h2', { text: 'Select a Path' });

        const inputEl = contentEl.createEl('input', { type: 'text', placeholder: 'Type to filter...' });
        const listEl = contentEl.createEl('ul');

        // Populate the list with paths
        this.paths.forEach(path => {
            const itemEl = listEl.createEl('li', { text: path });
            itemEl.onclick = () => {
                this.onSelect(path);
                this.close();
            };
        });

        // Filter functionality
        inputEl.addEventListener('input', () => {
            const filter = inputEl.value.toLowerCase();
            listEl.empty(); // Clear previous list items
            this.paths.forEach(path => {
                if (path.toLowerCase().includes(filter)) {
                    const itemEl = listEl.createEl('li', { text: path });
                    itemEl.onclick = () => {
                        this.onSelect(path);
                        this.close();
                    };
                    listEl.appendChild(itemEl);
                }
            });
        });
    }

    onClose() {
        const { contentEl } = this;
        contentEl.empty(); // Clear the modal content
    }
}

export class UserInput {
    private app: App;

    constructor(app: App) {
        this.app = app;
    }

    async getSourcePath(): Promise<string | null> {
        return new Promise((resolve) => {
            const files = this.app.vault.getFiles();
            const paths = files.map(file => file.path);

            const modal = new PathSelectModal(this.app, paths, resolve);
            modal.open();
        });
    }

    async getTargetPath(): Promise<string | null> {
        return new Promise((resolve) => {
            const folders = this.app.vault.getAllLoadedFiles().map(file => file.path);
            const modal = new PathSelectModal(this.app, folders, resolve);
            modal.open();
        });
    }
}