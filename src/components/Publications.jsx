import { publicationsData } from "../data/publicationsData";

function Publications() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Publications</h2>
      {Object.keys(publicationsData)
        .sort()
        .reverse()
        .map((year) => (
          <section key={year}>
            <h3 className="text-2xl font-semibold text-gray-700">{year}</h3>
            <ul className="list-disc list-inside mt-2 space-y-2">
              {publicationsData[year].map((pub, index) => (
                <li key={index} className="text-gray-600">
                  {pub.authors}. "{pub.title}." {pub.journal}, {pub.details},{" "}
                  {pub.year}, {pub.rank}
                  {pub.pdf && (
                    <a
                      href={pub.pdf}
                      className="text-blue-600 hover:underline ml-2"
                    >
                      [pdf]
                    </a>
                  )}
                  {pub.code && (
                    <a
                      href={pub.code}
                      className="text-blue-600 hover:underline ml-2"
                    >
                      [code]
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  );
}

export default Publications;
