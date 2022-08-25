const link = 'https://jsonplaceholder.typicode.com/photos/1';

const getTemplate = (schema) => {
  return `
	<div class="related">
		<img
			class="related__image"
			src="${schema.image}"
			alt="Image"
		/>
		<div class="related__text">
			<div class="related__headings">
				<h3 class="related__heading">
					${schema.title}
				</h3>
				<h4 class="related__subheading">
					${schema.description}
				</h4>
			</div>
			<div class="related__footer">
				<p class="related__author">
					By ${schema.author}
				</p>
				<p class="related__time">
					${schema.published_at}
				</p>
			</div>
		</div>
  </div>
`;
}

const schema = {
	"title": "NFT pics are the funhouse mirror high-end art deserves",
	"description": "High-end art is a versatile asset enabling all sorts of shady dealings, and NFT art’s prospects in that market may depend on its ability to do the same, for better or worse.",
	"image": "https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjItMDYvYzllNzNmM2QtMzQ1NC00YzZmLWEzN2QtYzI4YmJjMmU1NDg1LmpwZw==.jpg",
	"url": "https://cointelegraph.com/news/nft-pics-are-the-funhouse-mirror-high-end-art-deserves",
	"author": "Denis Khoronenko",
	"published_at": "2022-06-11T02:17:00+01:00"
};

CKEDITOR.dialog.add('abbrDialog', function (editor) {
  return {
    title: 'Related article widget',
    minWidth: 400,
    minHeight: 100,
    contents: [
      {
        id: 'tab-basic',
        label: 'Basic Settings',
        elements: [
          {
            type: 'text',
            id: 'articleUrl',
            label: 'Related article URL',
            validate: CKEDITOR.dialog.validate.notEmpty(
              "Url field cannot be empty.")
          }
        ]
      },
    ],
    onOk: function () {
			const html = getTemplate(schema);
      editor.insertHtml(html);
    }
  };
});
