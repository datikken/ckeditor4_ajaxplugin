CKEDITOR.plugins.add( 'abbr', {
	icons: 'abbr',
	init: function( editor ) {
		editor.addContentsCss( this.path + 'styles/index.css' );
		editor.addCommand( 'abbr', new CKEDITOR.dialogCommand( 'abbrDialog' ) );
		editor.ui.addButton( 'Abbr', {
			label: 'Insert Abbreviation',
			command: 'abbr',
			toolbar: 'insert'
		});
		CKEDITOR.dialog.add( 'abbrDialog', this.path + 'dialogs/abbr.js' );
	}
});
