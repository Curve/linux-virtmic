const venmic = require("../../lib");
const assert = require("assert");

try
{
    const patchbay = new venmic.PatchBay();

    assert(Array.isArray(patchbay.list()));

    assert.throws(() => patchbay.link(10), /expected two string/ig);
    assert.throws(() => patchbay.link(10, 10), /expected two string/ig);
    assert.throws(() => patchbay.link("Firefox", "gibberish"), /expected mode/ig);

    assert.doesNotThrow(() => patchbay.link("Firefox", "include"));
    assert.doesNotThrow(() => patchbay.unlink());
}
catch (error)
{
    console.warn("No PipeWire Server available");
    assert.throws(() => new venmic.PatchBay(), /failed to create patchbay instance/ig);
}
