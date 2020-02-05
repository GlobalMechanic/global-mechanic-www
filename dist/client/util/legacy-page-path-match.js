"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***************************************************************/
// Main
/***************************************************************/
/**
 * Old showcases used underscores, new pages uses dashes.
 * This method should reduce the amount of missing pages when clients
 * are clicking old links.
 */
const legacyPagePathMatch = (pagePath) => {
    const pagePathLegacy = pagePath.replace(/_/g, '-');
    return page => pagePath === page.path || pagePathLegacy === page.path;
};
/***************************************************************/
// Exports
/***************************************************************/
exports.default = legacyPagePathMatch;
