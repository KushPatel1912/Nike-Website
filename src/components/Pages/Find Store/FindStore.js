/** @format */

import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

export default function FindStore() {
  const [searchLocation, setSearchLocation] =
    useState("");
  const [userLocation, setUserLocation] =
    useState(null);
  const [nearbyStores, setNearbyStores] = useState([]);
  const [isSearching, setIsSearching] =
    useState(false);
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);

  // No hardcoded stores - using only real-time Google Places API

  // Function to get user's current location
  const getUserLocation = () => {
    if (navigator.geolocation) {
      setIsSearching(true);
      console.log(
        "🧭 Getting user's current location..."
      );

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } =
            position.coords;
          console.log(
            `📍 User location found: ${latitude}, ${longitude}`
          );

          setUserLocation({
            lat: latitude,
            lng: longitude,
          });

          // Update search location to show current coordinates
          setSearchLocation(
            `Current Location (${latitude.toFixed(
              4
            )}, ${longitude.toFixed(4)})`
          );

          // Center map on user's location
          updateMapCenter(latitude, longitude);

          // Search for nearby Nike stores
          searchNearbyStores(latitude, longitude);
        },
        (error) => {
          console.error(
            "Error getting location:",
            error
          );
          setIsSearching(false);

          // Show user-friendly error message
          alert(
            "Unable to get your location. Please make sure location services are enabled and try again."
          );
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        }
      );
    } else {
      alert(
        "Geolocation is not supported by this browser."
      );
    }
  };

  // Function to search for nearby Nike stores using Google Places API
  const searchNearbyStores = async (lat, lng) => {
    setIsSearching(true);

    try {
      if (
        window.google &&
        window.google.maps &&
        window.google.maps.places
      ) {
        // Check if PlacesService is available and working
        if (
          typeof window.google.maps.places
            .PlacesService === "undefined"
        ) {
          console.warn("PlacesService not available");
          setNearbyStores([]);
          setIsSearching(false);
          return;
        }

        const service =
          new window.google.maps.places.PlacesService(
            map || document.createElement("div")
          );

        const request = {
          location: { lat, lng },
          radius: 50000, // 50km radius for more precise results
          keyword: "Nike store",
        };

        // Wrap the nearbySearch call in a try-catch to handle API errors
        try {
          service.nearbySearch(
            request,
            (results, status) => {
              if (
                status ===
                window.google.maps.places
                  .PlacesServiceStatus.OK
              ) {
                const nikeStores = results
                  .filter(
                    (place) =>
                      place.name
                        .toLowerCase()
                        .includes("nike") &&
                      place.business_status ===
                        "OPERATIONAL"
                  )
                  .map((place) => ({
                    name: place.name,
                    address:
                      place.vicinity ||
                      "Address not available",
                    city:
                      place.vicinity ||
                      "Location not available",
                    status: place.opening_hours
                      ?.open_now
                      ? "Open • Hours vary"
                      : "Hours vary",
                    isClosed:
                      place.opening_hours?.open_now ===
                      false,
                    location: place.geometry.location,
                    rating:
                      place.rating || "No rating",
                    placeId: place.place_id,
                  }));

                setNearbyStores(nikeStores);
                console.log(
                  `🏪 Found ${nikeStores.length} Nike stores in the area:`,
                  nikeStores
                );
              } else {
                console.error(
                  "Places API error:",
                  status
                );
                // No fallback - show empty results
                setNearbyStores([]);
                console.log(
                  "🚫 No Nike stores found in this area"
                );
              }
              setIsSearching(false);
            }
          );
        } catch (placesError) {
          console.error(
            "Places API call failed:",
            placesError
          );
          // No fallback - show empty results
          setNearbyStores([]);
          setIsSearching(false);
        }
      } else {
        // Google Maps not available
        console.warn("Google Maps API not available");
        setNearbyStores([]);
        setIsSearching(false);
      }
    } catch (error) {
      console.error(
        "Error searching for stores:",
        error
      );
      setNearbyStores([]);
      setIsSearching(false);
    }
  };

  // Function to handle search input
  const handleSearch = () => {
    if (searchLocation.trim()) {
      setIsSearching(true);

      try {
        if (window.google && window.google.maps) {
          const geocoder =
            new window.google.maps.Geocoder();
          geocoder.geocode(
            { address: searchLocation },
            (results, status) => {
              if (status === "OK") {
                const location =
                  results[0].geometry.location;
                const lat = location.lat();
                const lng = location.lng();

                setUserLocation({
                  lat: lat,
                  lng: lng,
                });

                console.log(
                  `🎯 Search button clicked - Moving map to: ${lat}, ${lng}`
                );

                // Update map center if Google Maps is working
                updateMapCenter(lat, lng);
                console.log(
                  `🗺️ Map centered on new location`
                );

                // Search for Nike stores in this area
                console.log(
                  `🔍 Searching for Nike stores near: ${searchLocation}`
                );
                searchNearbyStores(lat, lng);
              } else {
                console.error(
                  "Geocoding failed:",
                  status
                );
                setNearbyStores([]);
                setIsSearching(false);
              }
            }
          );
        } else {
          console.warn(
            "Google Maps API not available for geocoding"
          );
          setNearbyStores([]);
          setIsSearching(false);
        }
      } catch (error) {
        console.error("Error in search:", error);
        setNearbyStores([]);
        setIsSearching(false);
      }
    }
  };

  // Function to initialize Google Places Autocomplete
  const initializeAutocomplete = () => {
    console.log(
      "🔍 Starting autocomplete initialization..."
    );

    try {
      // Debug: Check what's available
      console.log("Google object:", window.google);
      console.log("Google Maps:", window.google?.maps);
      console.log(
        "Google Places:",
        window.google?.maps?.places
      );
      console.log(
        "Autocomplete class:",
        window.google?.maps?.places?.Autocomplete
      );

      if (
        window.google &&
        window.google.maps &&
        window.google.maps.places &&
        window.google.maps.places.Autocomplete
      ) {
        console.log(
          "✅ Google Places API available, initializing autocomplete..."
        );

        const input = document.getElementById(
          "search-location-input"
        );
        console.log("📍 Input element found:", input);

        if (input) {
          // Clear any existing autocomplete
          if (
            input.getAttribute(
              "data-autocomplete-initialized"
            )
          ) {
            console.log(
              "♻️ Autocomplete already initialized, skipping..."
            );
            return;
          }

          console.log(
            "🚀 Creating new Autocomplete instance..."
          );
          const autocomplete =
            new window.google.maps.places.Autocomplete(
              input,
              {
                types: ["(cities)"],
                componentRestrictions: {
                  country: "us",
                },
                fields: [
                  "formatted_address",
                  "geometry",
                  "name",
                  "place_id",
                ],
              }
            );

          // Mark as initialized
          input.setAttribute(
            "data-autocomplete-initialized",
            "true"
          );

          autocomplete.addListener(
            "place_changed",
            () => {
              const place = autocomplete.getPlace();
              console.log(
                "🎯 Place selected from autocomplete:",
                place
              );

              if (
                place.geometry &&
                place.geometry.location
              ) {
                // Only update the search input text
                // Don't update map or search for stores until user clicks Search button
                setSearchLocation(
                  place.formatted_address || place.name
                );

                console.log(
                  `📝 Updated search input to: ${
                    place.formatted_address ||
                    place.name
                  }`
                );
                console.log(
                  "🔍 Map will update when user clicks Search button"
                );
              } else {
                console.warn(
                  "⚠️ Selected place has no geometry"
                );
              }
            }
          );

          console.log(
            "✅ Google Places Autocomplete initialized successfully!"
          );
        } else {
          console.error(
            "❌ Input element with ID 'search-location-input' not found"
          );
        }
      } else {
        console.warn(
          "⚠️ Google Places API not available:"
        );
        console.log(
          "- Google object exists:",
          !!window.google
        );
        console.log(
          "- Google Maps exists:",
          !!window.google?.maps
        );
        console.log(
          "- Google Places exists:",
          !!window.google?.maps?.places
        );
        console.log(
          "- Autocomplete class exists:",
          !!window.google?.maps?.places?.Autocomplete
        );
      }
    } catch (error) {
      console.error(
        "❌ Error initializing autocomplete:",
        error
      );
    }
  };

  // Function to update map center when location changes (for Google Maps)
  const updateMapCenter = (lat, lng) => {
    if (map && window.google && window.google.maps) {
      try {
        const newCenter =
          new window.google.maps.LatLng(lat, lng);
        map.setCenter(newCenter);
        map.setZoom(12);
      } catch (error) {
        console.error(
          "Error updating map center:",
          error
        );
      }
    }
  };

  useEffect(() => {
    // Initialize Google Maps
    if (mapRef.current && !map) {
      const initMap = () => {
        try {
          const mapInstance =
            new window.google.maps.Map(
              mapRef.current,
              {
                center: userLocation || {
                  lat: 40.7128,
                  lng: -74.006,
                }, // Use user location or default to NYC
                zoom: 12,
                styles: [
                  {
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }],
                  },
                ],
              }
            );

          // Don't auto-get user location - let user choose when to search

          // Add markers for nearby stores when they're available
          if (nearbyStores.length > 0) {
            nearbyStores.forEach((store) => {
              if (store.location) {
                const marker =
                  new window.google.maps.Marker({
                    position: store.location,
                    map: mapInstance,
                    title: store.name,
                    icon: {
                      url:
                        "data:image/svg+xml;charset=UTF-8," +
                        encodeURIComponent(`
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="black"/>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  `),
                      scaledSize:
                        new window.google.maps.Size(
                          24,
                          24
                        ),
                    },
                  });

                // Add info window for each marker
                const infoWindow =
                  new window.google.maps.InfoWindow({
                    content: `
                  <div style="padding: 10px; min-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${
                      store.name
                    }</h3>
                    <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${
                      store.address
                    }</p>
                    <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${
                      store.city
                    }</p>
                    <p style="margin: 0; font-size: 14px; color: #27ae60; font-weight: 500;">${
                      store.status
                    }</p>
                    ${
                      store.rating
                        ? `<p style="margin: 8px 0 0 0; font-size: 14px; color: #f39c12;">⭐ ${store.rating}/5</p>`
                        : ""
                    }
                  </div>
                `,
                  });

                marker.addListener("click", () => {
                  infoWindow.open(mapInstance, marker);
                });
              }
            });
          }

          setMap(mapInstance);

          // Initialize autocomplete after map is ready
          setTimeout(() => {
            initializeAutocomplete();
          }, 100);
        } catch (error) {
          console.error(
            "Error initializing Google Maps:",
            error
          );
        }
      };

      // Load Google Maps script if not already loaded
      if (window.google && window.google.maps) {
        initMap();
      } else {
        const script =
          document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC1BGwqo64oo0G7FUIuh-xLPvoN3886Wfw&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log(
            "🚀 Google Maps script loaded successfully"
          );

          // Add a timeout to check if Google Maps API is actually working
          setTimeout(() => {
            console.log(
              "🔍 Checking Google Maps API availability..."
            );

            if (
              window.google &&
              window.google.maps &&
              window.google.maps.places
            ) {
              console.log(
                "✅ Google Maps and Places API both available"
              );
              try {
                initMap();
                // Initialize autocomplete after map is ready
                setTimeout(() => {
                  initializeAutocomplete();
                }, 500);
              } catch (error) {
                console.error(
                  "❌ Error initializing map:",
                  error
                );
              }
            } else {
              console.error(
                "❌ Google Maps API not available after script load"
              );
              console.log("Debug info:");
              console.log(
                "- window.google:",
                !!window.google
              );
              console.log(
                "- window.google.maps:",
                !!window.google?.maps
              );
              console.log(
                "- window.google.maps.places:",
                !!window.google?.maps?.places
              );
            }
          }, 1000);
        };
        script.onerror = () => {
          console.error("Failed to load Google Maps");
        };
        document.head.appendChild(script);
      }
    }
  }, [
    map,
    userLocation,
    nearbyStores,
    initializeAutocomplete,
  ]);

  // Initialize autocomplete when Google Maps is available
  useEffect(() => {
    console.log(
      "🏁 Component mounted, checking for Google Maps..."
    );

    // Try to initialize Google Places autocomplete
    if (
      window.google &&
      window.google.maps &&
      window.google.maps.places
    ) {
      console.log(
        "🎯 Google Maps already available, initializing autocomplete..."
      );
      initializeAutocomplete();
    } else {
      console.log(
        "⏳ Google Maps not yet available, will initialize after script loads"
      );
    }
  }, [initializeAutocomplete]);

  // Update map markers when nearbyStores changes
  useEffect(() => {
    if (map) {
      // Clear existing markers
      markers.forEach((marker) => marker.setMap(null));

      if (nearbyStores.length > 0) {
        console.log(
          `🗺️ Adding ${nearbyStores.length} markers to map`
        );

        const newMarkers = [];

        nearbyStores.forEach((store) => {
          if (store.location) {
            const marker =
              new window.google.maps.Marker({
                position: store.location,
                map: map,
                title: store.name,
                icon: {
                  url:
                    "data:image/svg+xml;charset=UTF-8," +
                    encodeURIComponent(`
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="red"/>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                    </svg>
                  `),
                  scaledSize:
                    new window.google.maps.Size(
                      24,
                      24
                    ),
                },
              });

            // Add info window for each marker
            const infoWindow =
              new window.google.maps.InfoWindow({
                content: `
                <div style="padding: 10px; min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${
                    store.name
                  }</h3>
                  <p style="margin: 0 0 4px 0; font-size: 14px; color: #666;">${
                    store.address
                  }</p>
                  <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;">${
                    store.city
                  }</p>
                  <p style="margin: 0; font-size: 14px; color: ${
                    store.isClosed
                      ? "#e74c3c"
                      : "#27ae60"
                  }; font-weight: 500;">${
                  store.status
                }</p>
                  ${
                    store.rating !== "No rating"
                      ? `<p style="margin: 5px 0 0 0; font-size: 14px; color: #333;">⭐ ${store.rating}</p>`
                      : ""
                  }
                </div>
              `,
              });

            marker.addListener("click", () => {
              infoWindow.open(map, marker);
            });

            newMarkers.push(marker);
          }
        });

        setMarkers(newMarkers);
      } else {
        setMarkers([]);
      }
    }
  }, [map, nearbyStores]);

  return (
    <div
      className="container-fluid"
      style={{
        height: "calc(100vh - 120px)",
        padding: "0",
      }}
    >
      <div
        className="row"
        style={{ height: "100%" }}
      >
        {/* Left Panel - Store Search and List */}
        <div
          className="col-md-4"
          style={{
            backgroundColor: "white",
            padding: "30px 20px",
            height: "100%",
            overflowY: "auto",
            textAlign: "left",
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "black",
              marginBottom: "30px",
              paddingLeft: "10px",
              fontFamily: "Arial, sans-serif",

              textAlign: "left",
            }}
          >
            Find a Nike Store
          </h1>

          {/* Search Bar */}
          <div
            style={{
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <FontAwesomeIcon
              icon={faSearch}
              style={{
                position: "absolute",
                left: "15px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#666",
                zIndex: 1,
              }}
            />
            <input
              id="search-location-input"
              type="text"
              placeholder="Search Location"
              value={searchLocation}
              onChange={(e) =>
                setSearchLocation(e.target.value)
              }
              onKeyPress={(e) =>
                e.key === "Enter" && handleSearch()
              }
              style={{
                width: "100%",
                padding: "15px 15px 15px 45px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
              }}
            />
            <button
              onClick={handleSearch}
              disabled={isSearching}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "#000",
                color: "white",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "14px",
                cursor: "pointer",
                zIndex: 1,
              }}
            >
              {isSearching ? "Searching..." : "Search"}
            </button>
          </div>

          {/* Store Count and Filter */}
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              marginBottom: "20px",
            }}
          >
            <div>
              <span
                style={{
                  color: "black",
                  fontSize: "22px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {nearbyStores.length} Stores Near You
              </span>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "20px",
                paddingLeft: "10px",
              }}
            >
              <button
                onClick={getUserLocation}
                disabled={isSearching}
                style={{
                  backgroundColor: isSearching
                    ? "#666"
                    : "#000",
                  color: "white",
                  border: "none",
                  borderRadius: "20px",
                  padding: "12px 20px",
                  fontSize: "14px",
                  fontWeight: "500",
                  cursor: isSearching
                    ? "not-allowed"
                    : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.2s ease",
                  minWidth: "150px",
                  justifyContent: "center",
                }}
                onMouseOver={(e) => {
                  if (!isSearching) {
                    e.target.style.backgroundColor =
                      "#333";
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSearching) {
                    e.target.style.backgroundColor =
                      "#000";
                  }
                }}
              >
                {isSearching
                  ? "🔄 Finding..."
                  : "📍 Use My Location"}
              </button>

              <button
                style={{
                  backgroundColor: "#f5f5f5",
                  border: "1px solid #ddd",
                  borderRadius: "20px",
                  padding: "12px 20px",
                  fontSize: "14px",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                  fontWeight: "500",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor =
                    "#e8e8e8";
                  e.target.style.borderColor = "#ccc";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor =
                    "#f5f5f5";
                  e.target.style.borderColor = "#ddd";
                }}
              >
                <FontAwesomeIcon icon={faFilter} />
                Filter
              </button>
            </div>
          </div>

          {/* Store List */}
          <div style={{ marginBottom: "20px" }}>
            {nearbyStores.length > 0 ? (
              nearbyStores.map((store, index) => (
                <div
                  key={index}
                  style={{
                    padding: "20px 0",
                    paddingLeft: "20px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    fontSize: "28px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "black",
                      marginBottom: "8px",
                    }}
                  >
                    {store.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginBottom: "4px",
                    }}
                  >
                    {store.address}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#666",
                      marginBottom: "8px",
                    }}
                  >
                    {store.city}
                  </p>
                  <span
                    style={{
                      fontSize: "14px",
                      color: store.isClosed
                        ? "#e74c3c"
                        : "#27ae60",
                      fontWeight: "500",
                    }}
                  >
                    {store.status}
                  </span>
                </div>
              ))
            ) : (
              <div
                style={{
                  padding: "40px 20px",
                  textAlign: "center",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                Search for a location to find nearby
                Nike stores
              </div>
            )}
          </div>

          {/* View All Stores Link */}
          <div
            style={{
              textAlign: "left",
              padding: "20px 0",
              paddingLeft: "20px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#0066cc",
                textDecoration: "none",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              View All Stores
            </a>
          </div>
        </div>

        {/* Right Panel - Google Maps */}
        <div
          className="col-md-8"
          style={{
            backgroundColor: "#f8f9fa",
            height: "100%",
            position: "relative",
          }}
        >
          <div
            ref={mapRef}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#e8f4f8",
            }}
          />
        </div>
      </div>
    </div>
  );
}
