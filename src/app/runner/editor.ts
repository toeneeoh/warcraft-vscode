/**
 * @File   : editor.ts
 * @Author : Dencer (tdaddon@163.com)
 * @Link   : https://dengsir.github.io
 * @Date   : 5/23/2019, 11:14:03 AM
 */

import * as utils from '../../utils';

import { env } from '../../env';
import { localize } from '../../globals';

import { RunnerType } from './runner';
import { BaseRunner } from './private';

class EditorRunner extends BaseRunner {
    type() {
        return RunnerType.Editor;
    }

    @utils.report(localize('report.openEditor', 'Starting world editor'))
    async execute() {
        this.process = utils.spawn(env.config.wePath, [...env.config.weArgs, '-loadfile', env.mapFolder]);
    }
}

export const editorRunner = new EditorRunner();