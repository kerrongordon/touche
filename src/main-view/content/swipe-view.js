/*
 * Copyright 2020 José Expósito <jose.exposito89@gmail.com>
 *
 * This file is part of Touchégg-GUI.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation,  either version 3 of the License,  or (at your option)  any later
 * version.
 *
 * This program is distributed in the hope that it will be useful,  but  WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the  GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */
import GestureList from './gesture-list';
import model from '~/config/model';
import GestureDirection from '~/config/gesture-direction';
import GestureType from '~/config/gesture-type';

const { GObject, Gtk } = imports.gi;

class SwipeView extends Gtk.Box {
  _init() {
    super._init({ orientation: Gtk.Orientation.VERTICAL });
    this.showGestures = this.showGestures.bind(this);

    this.list3 = new GestureList(_('Swipe with 3 fingers'));
    this.list4 = new GestureList(_('Swipe with 4 fingers'));

    this.add(this.list3);
    this.add(this.list4);
    this.show_all();
  }

  showGestures(appName) {
    const gestures3 = [
      model.getGesture(GestureType.SWIPE, GestureDirection.UP, 3, appName),
      model.getGesture(GestureType.SWIPE, GestureDirection.DOWN, 3, appName),
      model.getGesture(GestureType.SWIPE, GestureDirection.LEFT, 3, appName),
      model.getGesture(GestureType.SWIPE, GestureDirection.RIGHT, 3, appName),
    ];

    const gestures4 = [
      model.getGesture(GestureType.SWIPE, GestureDirection.UP, 4, appName),
      model.getGesture(GestureType.SWIPE, GestureDirection.DOWN, 4, appName),
      model.getGesture(GestureType.SWIPE, GestureDirection.LEFT, 4, appName),
      model.getGesture(GestureType.SWIPE, GestureDirection.RIGHT, 4, appName),
    ];

    log('SwipeView: Loading 3 fingers swipes');
    this.list3.showGestures(gestures3);

    log('SwipeView: Loading 4 fingers swipes');
    this.list4.showGestures(gestures4);
  }
}

export default GObject.registerClass(SwipeView);