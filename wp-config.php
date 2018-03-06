<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'commerce_wpress');

/** MySQL database username */
define('DB_USER', 'commerce_wpress');

/** MySQL database password */
define('DB_PASSWORD', 'buck6895');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'R3xTt|-Wp(_$W?^rYQx+fW))v7[U3DxCh&%QJVZP4u~80E6wI_J(2rg`LwHAnxb5');
define('SECURE_AUTH_KEY',  '}8idtXrhh%tK?xWf_bN?tgLm6s `&7etJ/b1hWmkMUT;q:nXQK(wvjf *@ ^c]qc');
define('LOGGED_IN_KEY',    'Zw;1~g+v3,!r+1nXX-LFwn{S^M.(%&4$I`[!<PWg4|$2PtDkXWjDXb_a3=7^O;b?');
define('NONCE_KEY',        '@sCX=7$Y{[m8-ec01Yi!Z!awGM%0gBEFLD|+]@ar2%g_:u/*D7Nf_{(gTT6RNrx)');
define('AUTH_SALT',        '%s>a1+,.-4Q;4/+esp$#kb#^/Pmh@M*1(q7{,!bcGR]/w{1WJPfX|SP1av[G^x[r');
define('SECURE_AUTH_SALT', '-[+5^<b2-.SqCy5AStg~+y3vQq7LM!o/)y()9MKQj+tMw].+P}!ayS++5vW 7[Gr');
define('LOGGED_IN_SALT',   'K^+F:P]afcqIq)#i*P[+y&Q3yY.1 y< IYo,@^]B&@s+V[@SWsbuQ:U^x[u{ B.7');
define('NONCE_SALT',       'GBVsDK1,#Wo`O_.m~b8F)q,1t$G/-[-eyy~D-zY$?o-XEYKMK2;w8ngV$wf,<.: ');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
define('WP_CACHE', false);
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);


define( 'WP_MEMORY_LIMIT', '128M' );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
