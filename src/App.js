import React, { useState } from "react";

export default function App() {
  const [connectedSources, setConnectedSources] = useState([]);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  // available data sources
  const dataSources = [
    { id: "website", name: "Website" },
    { id: "shopify", name: "Shopify" },
    { id: "facebook_pixel", name: "Facebook Pixel" },
    { id: "facebook_page", name: "Facebook Page" },
    { id: "twitter_page", name: "Twitter Page" },
    { id: "google_ads_page", name: "Google Ads Page"},
  ];

//GTM, Facebook Pixel, Google Ads Tag, Facebook Page, Website, Shopify, CRMs, Twitter Page, Review Sites, Ad Managers (Meta, Google, Tiktok, etc.).
	// Email, SMS, Push, WhatsApp, Voice, Messenger, Ads
  // available channels
  const channels = [
    { id: "email", name: "Email" },
    { id: "sms", name: "SMS" },
    { id: "whatsapp", name: "WhatsApp" },
    { id: "voice", name: "Voice" },
    { id: "messenger", name: "Messenger" },
    { id: "ads", name: "Ads" },
  ];

  const toggleSource = (id) => {
    setConnectedSources((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const toggleChannel = (id) => {
    setSelectedChannels((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const generateRecommendations = () => {
    if (!connectedSources.length || !selectedChannels.length) {
      alert("Please connect at least one source and select at least one channel.");
      return;
    }

    const recs = selectedChannels.map((ch, index) => ({
      id: `rec_${Date.now()}_${index}`,
      channel: ch,
      audience: "lookalike_audience",
      message: `Personalized message for ${ch}`,
      timing: "optimal_engagement_time",
    }));

    setRecommendations(recs);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">
        Perplexity-like Chat Interface
      </h1>

      {/* Data Sources */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Connect Data Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {dataSources.map((ds) => (
            <button
              key={ds.id}
              onClick={() => toggleSource(ds.id)}
              className={`p-3 rounded-lg border ${
                connectedSources.includes(ds.id)
                  ? "bg-green-500 text-white"
                  : "bg-white"
              }`}
            >
              {ds.name}
            </button>
          ))}
        </div>
      </div>

      {/* Channels */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Channels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {channels.map((ch) => (
            <label
              key={ch.id}
              className="block border rounded-lg p-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedChannels.includes(ch.id)}
                onChange={() => toggleChannel(ch.id)}
                className="mr-2"
              />
              <div>
                <div className="font-medium">{ch.name}</div>
                <div className="text-xs text-gray-600">Template ready</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={generateRecommendations}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
      >
        Generate Recommendations
      </button>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Streaming JSON Output</h2>
          <pre className="bg-gray-900 text-green-400 text-sm p-4 rounded-lg overflow-x-auto">
            {JSON.stringify(recommendations, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

