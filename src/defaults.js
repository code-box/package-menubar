module.exports = [
    {
        id: "file",
        caption: "File",
        items: [
            {
                caption: "New File",
                command: "file.open"
            },
            { type: "separator" },
            {
                caption: "Save",
                command: "editor.save"
            },
            {
                caption: "Save All",
                command: "editor.save.all"
            },
            { type: "separator" },
            {
                caption: "Settings",
                command: "settings.open"
            }
        ]
    },
    {
        id: "view",
        caption: "View",
        items: [
            {
                caption: "Toggle Menu Bar",
                command: "view.menubar.toggle"
            }
        ]
    },
    {
        id: "tools",
        caption: "Tools",
        items: [
            {
                caption: "Command Palette...",
                command: "palette.open"
            }
        ]
    }
];
