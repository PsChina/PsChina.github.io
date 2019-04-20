import React from 'react'
import './index.scss'

import CodingView from './components/CodingView/idnex.jsx'
import PreviewView from './components/PreviewView/index.jsx'
import ControlTool from './components/ControlTool/index.jsx'

/** *
 * 网页编辑器组件
*/
class Editor extends React.Component {
    /**
     * @constructor
    */
    constructor() {
        super()
        this.state = {
            left: 1,
            right: 1,
        }
    }
    /**
     *
     * @param {object} obj 新状态
     * @param {function} callback 用于获取更新后的状态
     */
    setEditorState(obj, callback) {
        this.setState(obj, callback)
    }
    /**
     * @param {number} rate 左右区域分割比率
     */
    resizeCol(rate) {
        this.setState({
            left: rate,
            right: 1-rate,
        })
    }
    /**
     * @return {jsx} 返回一个可以调整左右区域范围的编辑器
    */
    render() {
        return (
            <div className="editor-box">
                <CodingView className="coding-view" flexVal={this.state.left}/>
                <ControlTool onClick={this.resizeCol.bind(this)} className="control-tool" />
                <PreviewView className="preview-view" flexVal={this.state.right} />
            </div>
        )
    }
}

export default Editor
