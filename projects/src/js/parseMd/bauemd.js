export class BaueMd {
    constructor(){}

    renderMd =(bodyId,mdFile)=>{
        // Define and assign a Markdown-it renderer.
        let md;
        md = window.markdownit({html: true}).use(window.markdownitFootnote);
        // Load the Markdown file with jQuery.
        $.ajax({
            url: `http://127.0.0.1:5500/assets/md/${mdFile}`,
             success: function(markdown){
            // Convert the Markdown to HTML.
            let html;
            html = md.render(markdown);
            // Print the HTML to #content using jQuery.
            $(`#${bodyId}`).html(html);
            }
        });
    }
}