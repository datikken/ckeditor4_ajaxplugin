const link = 'https://jsonplaceholder.typicode.com/photos/1';

CKEDITOR.dialog.add( 'abbrDialog', function( editor ) {
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
						validate: CKEDITOR.dialog.validate.notEmpty( "Url field cannot be empty." )
					}
				]
			},
		],
		onOk: function() {
			var dialog = this;
			var articleUrl = editor.document.createElement( 'articleUrl' );
			// articleUrl.setAttribute( 'title', dialog.getValueOf( 'tab-basic', 'title' ) );
			const userlink = dialog.getValueOf( 'tab-basic', 'articleUrl' );
			console.log(userlink)
			const data = CKEDITOR.ajax.load( link );
			articleUrl.setText( JSON.stringify(data) );
			// Finally, insert the element into the editor at the caret position.
			editor.insertElement( articleUrl );
		}
	};
});
