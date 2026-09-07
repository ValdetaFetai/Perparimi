# School Documents

Documents displayed in the **Planet dhe programet** section are managed in `script.js`.

## Adding a Document

1. Copy the new file into the `documents/` folder.
2. Open `script.js`.
3. Add a new object to the `documents` list:

```js
{
    title: "Document name",
    description: "PDF document",
    file: "documents/file-name.pdf",
    icon: "📄"
}
```

4. Save the file and refresh the page.

## Document Type Examples

- Word: `Word document` with the `📄` icon
- PDF: `PDF document` with the `📕` icon
- Excel: `Excel spreadsheet` with the `📊` icon
- Parent material: `Parent material` with the `📁` icon

The `file` value must match the exact file name and location inside the `documents/` folder.

The static page cannot automatically read the contents of the folder in a browser. For this reason, every new document must be registered in the `documents` list.
