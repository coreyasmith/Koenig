// Switch these lines once there are useful utils
// const testUtils = require('./utils');
require('../utils');

const card = require('../../lib/cards/audio');
const SimpleDom = require('simple-dom');
const serializer = new SimpleDom.HTMLSerializer(SimpleDom.voidMap);

describe('Audio card', function () {
    describe('front-end render', function () {
        it('renders the audio nodes with card wrapper element', function () {
            let opts = {
                env: {dom: new SimpleDom.Document()},
                payload: {
                    src: 'https://ghost.org/uploads/2017/11/file_example_MP3.mp3',
                    title: 'Sample audio',
                    duration: 130
                }
            };

            serializer.serialize(card.render(opts)).should.equal('<div class="kg-card kg-audio-card"><img src="" alt="audio-thumbnail" class="kg-audio-thumbnail kg-audio-hide"><div class="kg-audio-thumbnail"><svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 15.33a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM15 13.83a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.486 6.81A2.25 2.25 0 0 1 17.25 9v5.579a.75.75 0 0 1-1.5 0v-5.58a.75.75 0 0 0-.932-.727.755.755 0 0 1-.059.013l-4.465.744a.75.75 0 0 0-.544.72v6.33a.75.75 0 0 1-1.5 0v-6.33a2.25 2.25 0 0 1 1.763-2.194l4.473-.746Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5a.75.75 0 0 0-.75.75v19.5a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V5.133a.75.75 0 0 0-.225-.535l-.002-.002-3-2.883A.75.75 0 0 0 18 1.5H3ZM1.409.659A2.25 2.25 0 0 1 3 0h15a2.25 2.25 0 0 1 1.568.637l.003.002 3 2.883a2.25 2.25 0 0 1 .679 1.61V21.75A2.25 2.25 0 0 1 21 24H3a2.25 2.25 0 0 1-2.25-2.25V2.25c0-.597.237-1.169.659-1.591Z"/></svg></div><div class="kg-player-container"><audio src="https://ghost.org/uploads/2017/11/file_example_MP3.mp3" preload="metadata"></audio><div class="kg-audio-title">Sample audio</div><div class="kg-player"><button class="kg-audio-play-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.14 10.608 2.253.164A1.559 1.559 0 0 0 0 1.557v20.887a1.558 1.558 0 0 0 2.253 1.392L23.14 13.393a1.557 1.557 0 0 0 0-2.785Z"/></svg></button><button class="kg-audio-pause-icon kg-audio-hide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="1" width="7" height="22" rx="1.5" ry="1.5"/><rect x="14" y="1" width="7" height="22" rx="1.5" ry="1.5"/></svg></button><span class="kg-audio-current-time">0:00</span><div class="kg-audio-time">/<span class="kg-audio-duration">2:10</span></div><input type="range" class="kg-audio-seek-slider" max="100" value="0"><button class="kg-audio-playback-rate">1&#215;</button><button class="kg-audio-unmute-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.189 2.021a9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.794a.249.249 0 0 1 .221.133 9.73 9.73 0 0 0 7.924 4.85h.06a1 1 0 0 0 1-1V3.02a1 1 0 0 0-1.06-.998Z"/></svg></button><button class="kg-audio-mute-icon kg-audio-hide"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.177 4.3a.248.248 0 0 0 .073-.176v-1.1a1 1 0 0 0-1.061-1 9.728 9.728 0 0 0-7.924 4.85.249.249 0 0 1-.221.133H5.25a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h.114a.251.251 0 0 0 .177-.073ZM23.707 1.706A1 1 0 0 0 22.293.292l-22 22a1 1 0 0 0 0 1.414l.009.009a1 1 0 0 0 1.405-.009l6.63-6.631A.251.251 0 0 1 8.515 17a.245.245 0 0 1 .177.075 10.081 10.081 0 0 0 6.5 2.92 1 1 0 0 0 1.061-1V9.266a.247.247 0 0 1 .073-.176Z"/></svg></button><input type="range" class="kg-audio-volume-slider" max="100" value="100"></div></div></div>');
        });
    });

    describe('email render', function () {
        it('generates an email-friendly audio in a paragraph', function () {
            let opts = {
                env: {dom: new SimpleDom.Document()},
                payload: {
                    src: 'https://ghost.org/uploads/2017/11/file_example_MP3.mp3',
                    title: 'Sample audio',
                    duration: 130
                },
                options: {
                    target: 'email'
                }
            };
            serializer.serialize(card.render(opts)).should.equal('<table cellspacing="0" cellpadding="0" border="0" style="border: 1px solid #E9E9E9; border-radius: 3px; width: auto; margin: 0 auto 1.5em; width: 100%;"><tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td width="60"><a href="https://ghost.org" style="display: block; width: 60px; height: 60px; padding-top: 4px; padding-right: 16px; padding-bottom: 4px; padding-left: 4px; border-radius: 2px;"><img src="https://static.ghost.org/v4.0.0/images/audio-file-icon.png" style="width: 24px; height: 24px; padding: 18px; background: #e9e9e9; border-radius: 2px;"></a></td><td style="position: relative; vertical-align: center;" valign="middle"><a href="https://ghost.org" style="position: absolute; display: block; top: 0; right: 0; bottom: 0; left: 0;"></a><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td><a href="https://ghost.org" style="display: block; font-size: 16px; font-weight: 600; line-height: 18px; padding-right: 20px; padding-bottom: 4px; padding-top: 4px; text-decoration: none; color: #121212;">Sample audio</a></td></tr><tr><td><table cellspacing="0" cellpadding="0" border="0" width="100%"><tr><td width="24" style="vertical-align: middle;" valign="middle"><a href="https://ghost.org" style="color: #121212; display: block; box-sizing: border-box; width: 16px; height: 16px; border-style: solid; border-width: 8px 0px 8px 16px; border-color: transparent transparent transparent currentColor;"></a></td><td style="vertical-align: middle;" valign="middle"><a href="https://ghost.org" style="display: block; text-decoration: none; font-size: 13px; color: #121212;">2:10</a></td></tr></table></td></tr></table></td></tr></table></td></tr></table>');
        });
    });

    it('renders nothing if src is missing', function () {
        let opts = {
            env: {dom: new SimpleDom.Document()},
            payload: {
                src: '',
                title: 'Sample audio',
                duration: 130
            }
        };

        serializer.serialize(card.render(opts)).should.equal('');
    });

    it('transforms content urls absolute to relative', function () {
        let payload = {
            src: 'https://ghost.org/uploads/2017/11/file_example_MP3.mp3',
            title: 'Sample audio',
            duration: 130
        };

        const transformed = card.absoluteToRelative(payload, {siteUrl: 'https://ghost.org'});

        transformed.src.should.equal('/uploads/2017/11/file_example_MP3.mp3');
    });

    it('transforms content urls relative to absolute', function () {
        let payload = {
            src: '/uploads/2017/11/file_example_MP3.mp3',
            title: 'Sample audio',
            duration: 130
        };

        const transformed = card.relativeToAbsolute(payload, {siteUrl: 'https://ghost.org'});

        transformed.src.should.equal('https://ghost.org/uploads/2017/11/file_example_MP3.mp3');
    });

    it('transforms content urls to transform ready', function () {
        let payload = {
            src: '/uploads/2017/11/file_example_MP3.mp3',
            title: 'Sample audio',
            duration: 130
        };

        const transformed = card.toTransformReady(payload, {siteUrl: 'https://ghost.org'});

        transformed.src.should.equal('__GHOST_URL__/uploads/2017/11/file_example_MP3.mp3');
    });
});
