function artistDropdownLinks() {
  function fu(str) {
    if (str.length < 3) {
      return str;
    }
    return str[0].toUpperCase() + str.slice(1);
  }

  var sections = Array.prototype.slice.call(
    document.querySelectorAll("section[id].Index-page--has-image")
  );

  var sep = " · ";

  var res = {
    ls: sections
      .map(function (e) {
        var str = e.textContent.toLowerCase();
        var s = str.split(/\s+/).filter(Boolean);
        var l = s.slice(-1)[0];
        var fs = s.slice(0, -1);

        return {
          name: fu(l) + sep + fs.map(fu).join(" "),
          href: "#" + e.id,
        };
      })
      .filter(function (e) {
        return !(/vaerker/i.test(e) || /page/i.test(e));
      }),
  };
  return res;
}
window.artistDropdownLinks = artistDropdownLinks;
