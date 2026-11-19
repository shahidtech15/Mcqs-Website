const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

function extractPdfText(pdfPath) {
    const buf = fs.readFileSync(pdfPath);
    let pos = 0;
    let fullText = '';
    while ((pos = buf.indexOf('stream', pos)) !== -1) {
        let start = pos + 6;
        if (buf[start] === 0x0d && buf[start+1] === 0x0a) start += 2;
        else if (buf[start] === 0x0a || buf[start] === 0x0d) start += 1;
        let end = buf.indexOf('endstream', start);
        if (end !== -1) {
            const streamData = buf.slice(start, end);
            try {
                const decomp = zlib.inflateSync(streamData);
                const str = decomp.toString('latin1');
                
                // Extract text from TJ and Tj operators
                // TJ format: [ (text) num (text) ... ] TJ
                const tjRegex = /\[(.*?)\]\s*TJ/gs;
                let m;
                while ((m = tjRegex.exec(str)) !== null) {
                    const inner = m[1];
                    const parts = inner.match(/\((.*?)\)/g);
                    if (parts) {
                        const line = parts.map(p => p.slice(1, -1)).join('');
                        fullText += line + ' ';
                    }
                }
                
                // Tj format: (text) Tj
                const singleTjRegex = /\((.*?)\)\s*Tj/g;
                while ((m = singleTjRegex.exec(str)) !== null) {
                    fullText += m[1] + '\n';
                }
            } catch (e) {}
        }
        pos = end !== -1 ? end + 9 : pos + 6;
    }
    return fullText;
}

const pdfFiles = [
    'frontend/resources/english_vocab.pdf',
    'frontend/resources/english_1000_repeated.pdf',
    'frontend/resources/english_mcqs.pdf',
    'frontend/resources/english_mcqs_2.pdf'
];

pdfFiles.forEach(file => {
    try {
        const text = extractPdfText(file);
        console.log(`\n=== FILE: ${file} ===`);
        console.log(`Extracted characters: ${text.length}`);
        console.log('Sample excerpt:\n', text.slice(0, 400).replace(/\s+/g, ' '));
    } catch (e) {
        console.error(`Error on ${file}:`, e.message);
    }
});
