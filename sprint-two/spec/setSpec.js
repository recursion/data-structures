describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a("function");
    expect(set.contains).to.be.a("function");
    expect(set.remove).to.be.a("function");
  });

  it('should add values to a set', function(){
    set.add("Susan Sarandon");
    set.add("Danny Glover");
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should add numbers to a set', function() {
    set.add(9);
    set.add(3);
    expect(set.contains(9)).to.equal(true);
    expect(set.contains(3)).to.equal(true);
  });

  it('should add booleans to a set', function() {
    set.add(true);
    set.add(false);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(false)).to.equal(true);
  });

  it('should add objects to a set', function() {
    var subject = {a: 'booyah', b: 'adoowhat'};
    set.add(subject);
    expect(set.contains(subject)).to.equal(true);
  });

  it('should add arrays to a set', function() {
    var subject = [1, 2, 'three', {a: 4}];
    set.add(subject);
    expect(set.contains(subject)).to.equal(true);
  });

  it('should remove values from a set', function(){
    set.add("Mel Gibson");
    set.remove("Mel Gibson");
    expect(set.contains("Mel Gibson")).to.equal(false);
  });

});
