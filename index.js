const util = require('hexo-util');
const className = (hexo.config.linkCard && hexo.config.linkCard.className) ? hexo.config.linkCard.className : 'link-card';

hexo.extend.tag.register('linkCard', function (args) {
    return renderTag(args);
});

function renderTag(args) {
    var url = args[0];
    var title = util.htmlTag('h1', {}, args[1]);
    var desc = util.htmlTag('p', {}, args[2]);
    var content = util.htmlTag('div', {
        class: className + '__content'
    }, title + desc);
    var aTag = util.htmlTag('a', {
        class: className,
        a: url,
        target: '_blank'
    }, content);

    return aTag;
}