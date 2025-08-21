import { useState, useEffect } from 'preact/hooks';
import { setCookie, getCookie } from '../../utils/cookies';
import Button from '../buttons/Button';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [nonPersonalized, setNonPersonalized] = useState(false);

  useEffect(() => {
    const accepted = getCookie('cookieAccepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    setCookie('cookieAccepted', 'true', 365);
    setVisible(false);
  };

  const savePreferences = () => {
    setCookie('cookieAccepted', nonPersonalized ? 'non-personalized' : 'true', 365);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
      <div className="flex-1">
        <p className="text-sm md:text-base">
          Wij gebruiken cookies om je ervaring te verbeteren. Door verder te gaan, ga je akkoord met ons gebruik van cookies.
        </p>
        <button
          className="text-sm text-orange-500 underline mt-2 md:mt-0"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Cookie voorkeuren
        </button>

        {showDropdown && (
          <div className="mt-2 bg-gray-700 p-2 rounded-md flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={nonPersonalized}
                onChange={(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  setNonPersonalized(target.checked);
                }}
              />
              Alleen niet-gepersonaliseerde cookies toestaan
            </label>

            <div className="m-2">
              <Button
                label="Opslaan"
                type="button"
                onClick={savePreferences}
              />
            </div>
          </div>
        )}
      </div>

      <div className="m-2">
        <Button
          label="Accepteren"
          type="button"
          onClick={acceptAll}
        />
      </div>
    </div>
  );
}
