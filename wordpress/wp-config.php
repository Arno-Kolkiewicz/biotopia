<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_biotopia_2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm$rb.gDe@pnr]=@QlX:XD]|PL W~KM%;=|B>~JeTPFnn*a5;U&>vk8v]R5Y&}fP`' );
define( 'SECURE_AUTH_KEY',  '|8A&r&NLS.TnzGl9#6;15k1@8!$+Lq}HWjIEA*|9B*mswbQ%q9m:w>K8B]PD ql|' );
define( 'LOGGED_IN_KEY',    '!!LXbuJ)GAC#|Xpi0[d-Q;B@*ih@V^?ry8gA0CES~kV|`OQDBoxHqi3)J7(6^#8S' );
define( 'NONCE_KEY',        '0#}eh>f_D XkG5;ObPD(V+)y$[?dX|]L9W;O$V{4%PVpk=e=oqVm. i[ryZ2egLx' );
define( 'AUTH_SALT',        '(hPTl?qQIP#l7SdZrC%GNPNn1@@$s:amke#0x#4{?kE^O8UWOkhCz/ =D:P9`}6n' );
define( 'SECURE_AUTH_SALT', ' l635jhS3i$Sk`xlD7D{nGjsG=Bj;xMFH%t{1yJ^d6:CrTO@T8J1n]y|Xp7(CZ];' );
define( 'LOGGED_IN_SALT',   'RH6rN[*5Wx}h:vTXIp^UzU7ELStCn2/9RGzqLTz$L;tc#JQM|p_H4}AVgTEwJrcu' );
define( 'NONCE_SALT',       'W~Qyu*Ol?fAfEwBC~;wsY!/|>fIfRLR& |xmdd6iXAa=D#KLO_56KMkNSHEyVB6}' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
