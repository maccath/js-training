console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(name, comment) {
    console.log(name, comment);
}
