describe('Ionic Element Activator', function() {

  beforeEach(function() {
    window.setTimeout = ionic.requestAnimationFrame = function(cb) { cb(); };
  });

  it('Should activate an <a>', function() {
    var e = { target: document.createElement('a') };
    ionic.activator.start(e);
    expect(e.target.classList.contains('activated')).toEqual(true);
  });

  it('Should activate a <button>', function() {
    var e = { target: document.createElement('button') };
    ionic.activator.start(e);
    expect(e.target.classList.contains('activated')).toEqual(true);
  });

  it('Should activate an element with ng-click', function() {
    var e = { target: document.createElement('div') };
    e.target.setAttribute('ng-click', 'test()');
    ionic.activator.start(e);
    expect(e.target.classList.contains('activated')).toEqual(true);
  });

  it('Should activate a .button', function() {
    var e = { target: document.createElement('div') };
    e.target.className = 'button';
    ionic.activator.start(e);
    expect(e.target.classList.contains('activated')).toEqual(true);
  });

  it('Should not activate just .item', function() {
    var e = { target: document.createElement('div') };
    e.target.className = 'item';
    ionic.activator.start(e);
    expect(e.target.classList.contains('activated')).toEqual(false);
  });

  it('Should activate .item with a child "a"', function() {
    var itemEle = document.createElement('div');
    itemEle.className = 'item';

    var aEle = document.createElement('a');
    itemEle.appendChild(aEle);

    var e = { target: aEle };

    ionic.activator.start(e);
    expect(itemEle.classList.contains('activated')).toEqual(true);
    expect(aEle.classList.contains('activated')).toEqual(false);
  });

  it('Should activate .item with a child "div.item-content a"', function() {
    var itemEle = document.createElement('div');
    itemEle.className = 'item';

    var itemContentEle = document.createElement('div');
    itemContentEle.className = 'item-content';
    itemEle.appendChild(itemContentEle);

    var aEle = document.createElement('a');
    itemContentEle.appendChild(aEle);

    var e = { target: aEle };

    ionic.activator.start(e);
    expect(itemEle.classList.contains('activated')).toEqual(true);
    expect(itemContentEle.classList.contains('activated')).toEqual(false);
    expect(aEle.classList.contains('activated')).toEqual(false);
  });

  it('Should activate .item with a child "div.item-content div[ng-click]"', function() {
    var itemEle = document.createElement('div');
    itemEle.className = 'item';

    var itemContentEle = document.createElement('div');
    itemContentEle.className = 'item-content';
    itemEle.appendChild(itemContentEle);

    var divEle = document.createElement('div');
    divEle.setAttribute('ng-click', 'test()');
    itemContentEle.appendChild(divEle);

    var e = { target: divEle };

    ionic.activator.start(e);
    expect(itemEle.classList.contains('activated')).toEqual(true);
    expect(itemContentEle.classList.contains('activated')).toEqual(false);
    expect(divEle.classList.contains('activated')).toEqual(false);
  });

});
