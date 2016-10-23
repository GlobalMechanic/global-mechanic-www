'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Staff;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _staff = require('modules/staff');

var _staff2 = _interopRequireDefault(_staff);

var _components = require('components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Staff(props) {
  var id = props.params.staff;
  var person = _staff2.default.filter(function (dir) {
    return dir.id === id;
  })[0];

  return _react2.default.createElement(_components.StaffPicture, { staff: person });
}