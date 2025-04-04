<?php
/*
Plugin Name: DHO Søgefelt Widget
Description: Tilføjer et søgefelt til Danskernes Historie Online.
Version: 1.0
Author: Danskernes Historie Online
*/

function dho_output_widget_code() {
    echo '<div id="dhoscript-widget"></div>';
    echo '<script src="https://danskernes-historie-online.github.io/dhoscript/widget.js" async></script>';
}

// Automatisk i footeren
add_action('wp_footer', 'dho_output_widget_code');

// Alternativ: aktiver som shortcode [dhoscript_widget]
// add_shortcode('dhoscript_widget', 'dho_output_widget_code');
